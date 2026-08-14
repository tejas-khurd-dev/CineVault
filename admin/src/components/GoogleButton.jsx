import { useEffect, useRef, useState } from "react";

const GoogleButton = ({ onSuccess }) => {
  const googleButtonRef = useRef(null);
  const [width, setWidth] = useState(400);

  useEffect(() => {
    const container = googleButtonRef.current;
    if (!container) return;

    const updateWidth = () => {
      const containerWidth = container.offsetWidth;
      if (containerWidth > 0) {
        setWidth(Math.min(containerWidth, 400));
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const renderGoogleButton = () => {
      if (!window.google?.accounts?.id) {
        console.error("Google Identity Services is not available");
        return;
      }

      if (!googleButtonRef.current) {
        console.error("Google button container not found");
        return;
      }

      googleButtonRef.current.innerHTML = "";

      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: onSuccess,
      });

      window.google.accounts.id.renderButton(
        googleButtonRef.current,
        {
          theme: "outline",
          size: "large",
          width, 
          text: "continue_with",
          shape: "rectangular",
        }
      );
    };

    if (window.google?.accounts?.id) {
      requestAnimationFrame(renderGoogleButton);
      return;
    }

    const checkGoogle = setInterval(() => {
      if (window.google?.accounts?.id) {
        clearInterval(checkGoogle);
        renderGoogleButton();
      }
    }, 100);

    return () => {
      clearInterval(checkGoogle);
    };
  }, [onSuccess, width]);

  return <div ref={googleButtonRef} className="w-full max-w-[400px]"></div>;
};

export default GoogleButton;