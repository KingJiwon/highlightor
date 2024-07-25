import SquadProvider from '@/hooks/SquadContext';

export default function layout({ children, modal }) {
  return (
    <>
      <SquadProvider>
        {children} {modal}
      </SquadProvider>
    </>
  );
}
