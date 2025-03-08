import Link from "next/link";
import Layout from "../components/Layout";
const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-[32px] text-pink-200">
          <p>unique__code</p>
        </div>
        <div className="text-[128px] font-bold">
          <h1>4</h1>
        </div>
        <div className="text-[24px] font-bold">
          <h1>players joined</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          {/* CREATE Button */}
          <h1>Waiting for host to start game...</h1>
        </div>
      </div>
    </Layout>
  )
}

export default page
