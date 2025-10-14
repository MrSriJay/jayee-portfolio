import { ThemeToggle } from "../compoents/ThemeToggle"
import { StartBackground } from "../compoents/StartBackground"

export const NotFound = () => {
  return (
      
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center text-center space-y-6">
      {/* Theme Toggles */}
      <ThemeToggle/>

      {/* BAckground Effects */}
      <StartBackground/>
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl font-medium">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-lg">It might have been moved or deleted. Let’s get you back on track.</p>
      <a
        href="/"
        className="mt-4 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary-dark transition"
      >
        Go to Home
      </a>
    </div>
  )
}
