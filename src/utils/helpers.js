import toast from "react-hot-toast";

// Cart toast messages
export function successToast(message) {
  return toast.success(message, {
    duration: 3000,
    style: {
      backgroundColor: "var(--font-color)",
      color: "var(--background)",
    },
  });
}

export function errorToast(message) {
  return toast.error(message, {
    duration: 3000,
    style: {
      backgroundColor: "var(--font-color)",
      color: "var(--background)",
    },
  });
}
