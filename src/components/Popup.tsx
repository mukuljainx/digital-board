import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

interface IProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  offset?: { x?: number; y?: number };
}

const Wrapper = styled.div`
  position: fixed;
`;

const Popup = ({ trigger, children, offset }: IProps) => {
  const [style, setStyle] = React.useState<React.CSSProperties | undefined>(
    undefined
  );
  const [show, setShow] = React.useState(false);
  const triggerRef = React.useRef<HTMLSpanElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  // to avoid any possible flickering
  React.useEffect(() => {
    if (!show) {
      return;
    }

    if (triggerRef.current && popupRef.current) {
      const trigger = triggerRef.current.getBoundingClientRect();
      const popup = popupRef.current.getBoundingClientRect();

      setStyle({
        top: trigger.y + (offset ? offset.y || 0 : 0),
        left: trigger.x - popup.width + (offset ? offset.x || 0 : 0),
      });
    }
  }, [show]);

  return (
    <>
      <span
        ref={triggerRef}
        onClick={() => {
          setShow((prevState) => !prevState);
        }}
      >
        {trigger}
      </span>
      {show &&
        ReactDOM.createPortal(
          <Wrapper ref={popupRef} style={style}>
            {children}
          </Wrapper>,
          document.body
        )}
    </>
  );
};

export default Popup;
