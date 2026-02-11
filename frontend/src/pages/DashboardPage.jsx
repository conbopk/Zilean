import {useState} from "react";
import {useNavigate} from "react-router";
import {useUser} from "@clerk/clerk-react";
import {useActiveSessions, useCreateSession, useMyRecentSessions} from "../hooks/useSessions.js";
import Navbar from "../components/Navbar.jsx";
import WelcomeSection from "../components/WelcomeSection.jsx";
import StatsCards from "../components/StatsCards.jsx";
import ActiveSessions from "../components/ActiveSessions.jsx";
import CreateSessionModal from "../components/CreateSessionModal.jsx";
import RecentSessions from "../components/RecentSessions.jsx";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const activeSessions = activeSessionData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) => {
    if (!user.id) return false;

    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  const handleCreateRoom = () => {
    if (!roomConfig.problem.trim() || !roomConfig.difficulty.trim()) return;

    createSessionMutation.mutate(
        {
          problem: roomConfig.problem,
          difficulty: roomConfig.difficulty,
        },
        {
          onSuccess: (data) => {
            setShowCreateModal(false);
            navigate(`/session/${data.session._id}`);
          },
        }
    );
  };

  return (
      <>
        <div className='min-h-screen bg-base-300'>
          <Navbar />
          <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

          {/*Grid layout*/}
          <div className='container mx-auto px-6 pb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <StatsCards
                activeSessionsCount={activeSessions.length}
                recentSessionsCount={recentSessions.length}
              />
              <ActiveSessions
                  sessions={activeSessions}
                  isLoading={loadingActiveSessions}
                  isUserInSession={isUserInSession}
              />
            </div>

            <RecentSessions sessions={recentSessions} isLoading={loadingRecentSessions}/>
          </div>
        </div>

        <CreateSessionModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          roomConfig={roomConfig}
          setRoomConfig={setRoomConfig}
          onCreateRoom={handleCreateRoom}
          isCreating={createSessionMutation.isPending}
        />
      </>
  );
}