import SquadProvider from '@/util/context/SquadContext';

export default function layout({ children, modal }) {
  return (
    <>
      <SquadProvider>
        {children} {modal}
      </SquadProvider>
    </>
  );
}
