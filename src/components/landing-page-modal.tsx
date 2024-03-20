interface Props {
  children: React.ReactNode;
  show: boolean;
}

const Modal = (props: Props) => {
  const { children, show } = props;

  if (show) {
    return (
      <div className="fixed inset-y-0 inset-x-0 z-50 flex h-full min-w-full max-w-full items-center justify-center bg-white/50">
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
