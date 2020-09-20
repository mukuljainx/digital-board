import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

interface IProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  offset?: { x?: number; y?: number };
  allowed?: boolean;
}

const Wrapper = styled.div`
  position: fixed;
`;

const Popup = ({ trigger, children, offset, allowed }: IProps) => {
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

  React.useEffect(() => {
    if (typeof allowed === "boolean" && !allowed) {
      setShow(false);
    }
  }, [allowed]);

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
        (typeof allowed === "boolean" ? allowed : true) &&
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
