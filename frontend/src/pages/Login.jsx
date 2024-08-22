import Title from "../components/Title";

const Login = () => {
  return (
    <div className="flex grid-flow-col gap-4 justify-around h-full border-t border-brown p-20">
      <div className="grid gap-2 justify-center grid-cols-[1-fr] ">
        <div className="text-2xl mb-3">
          <Title text1={"sign"} text2={"up"} />
        </div>
        <form action="" className="grid gap-2 w-full">
          <input
            type="text"
            className="w-[12] outline-none border-brown border py-1 px-3 rounded-sm text-black"
            placeholder="usename"
          />
          <input
            type="email"
            className="w-[12]  outline-none border-brown border py-1 px-3 rounded-sm text-black"
            placeholder="email"
          />
          <input
            type="password"
            className="w-[12] outline-none border-brown border py-1 px-3 rounded-sm text-black"
            placeholder="password"
          />
          <input
            type="password"
            className="w-[12] outline-none text-black border-brown border py-1 px-3 rounded-sm"
            placeholder="verify password"
          />
          <button
            type="submit"
            className="w-[12] bg-green mt-4 py-1 text-black active:bg-beige rounded-sm"
          >
            sign up
          </button>
        </form>
      </div>
      <div className="grid gap-2 justify-center grid-cols-[1-fr]">
        <div className="text-2xl mb-3">
          <Title text1={"log"} text2={"in"} />
        </div>
        <div className="grid w-full">
          <button className="flex justify-center items-center gap-2 w-[12] py-1 bg-green text-black active:bg-beige rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
            </svg>
            sign in with google
          </button>
        </div>
        <form
          action=""
          className="grid gap-2 w-full mt-4 border-t border-brown pt-6"
        >
          <input
            type="email"
            className="w-[12] outline-none text-black border-brown border py-1 px-3 rounded-sm"
            placeholder="email"
          />
          <input
            type="password"
            className="w-[12] outline-none text-black border-brown border py-1 px-3 rounded-sm"
            placeholder="password"
          />
          <button
            type="submit"
            className="w-[12] bg-green mt-4 py-1 text-black active:bg-beige rounded-sm"
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
