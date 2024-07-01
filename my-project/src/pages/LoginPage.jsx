export default function LoginPage () {
  return(
    <div className="mt-4">
      <h2 className="text-2xl text-center mb-4"> Login </h2>
      <form className="max-w-md mx-auto">
        <input type="email" placeholder="your@email.com"/>
        <input type="password" placeholder="password"/>
        <button className="primary"> Login </button>
      </form>

    </div>

  )

}