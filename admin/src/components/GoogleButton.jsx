import { useEffect, useRef } from "react";

const GoogleButton = ({ onSuccess }) => {
  const googleButtonRef = useRef(null);

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
          width: 400,
          text: "continue_with",
          shape: "rectangular",
        }
      );
    };

    // Google is already loaded
    if (window.google?.accounts?.id) {
      requestAnimationFrame(renderGoogleButton);
      return;
    }

    // Google script is in index.html but hasn't loaded yet
    const checkGoogle = setInterval(() => {
      if (window.google?.accounts?.id) {
        clearInterval(checkGoogle);
        renderGoogleButton();
      }
    }, 100);

    return () => {
      clearInterval(checkGoogle);
    };
  }, [onSuccess]);

  return <div ref={googleButtonRef}></div>;
};

export default GoogleButton;