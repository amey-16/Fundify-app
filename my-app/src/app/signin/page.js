const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,  // Prevents automatic redirection
    });

    if (result?.error) {
      setError(result.error);
    } else {
      // ✅ Store authentication state in localStorage
      localStorage.setItem("success", "true");

      // ✅ Redirect to the dashboard
      router.push("/dashboard");
    }
  } catch (error) {
    console.error("SignIn error:", error);
    setError("An error occurred. Please try again.");
  } finally {
    setLoading(false);
  }
};
