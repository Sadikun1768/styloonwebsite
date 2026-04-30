import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Top promo bar */}
      <div className="w-full bg-gradient-to-r from-purple-700 to-purple-500 text-center py-4">
        <h1 className="text-white font-bold">✨ ১০০% কালার গ্যারান্টি · ক্যাশ অন ডেলিভারি · সারা বাংলাদেশে ✨</h1>
      </div>

      {/* Top promo bar */}

      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="container py-6 px-30 flex items-center justify-between mx-auto">
          <h1 className=" text-purple-600 text-2xl font-bold">STYLON</h1>
          <button className="bg-purple-600 bg-gradient-to-r from-purple-500 to-pink-500 font-bold py-2 px-5 rounded-full flex items-center gap-4">
            📞Call
          </button>
        </div>
      </header>

      {/* End Header */}


      {/* Hero / Headline */}
      <section className="w-full relative">
        <span className="absolute top-0 left-0 text-4xl text-purple-600 py-10 px-10">✦</span>
        <span className="absolute bottom-0 right-0 text-4xl text-purple-600 py-10 px-10">✦</span>
        <div className="bg-gradient-to-r from-pink-100 to-purple-200 py-10 md:py-20">
          <h1 className="text-4xl md:text-4xl font-bold text-center text-black pb-4 leading-normal">
            গিফট এর জন্য মনকাড়া ড্রেস<br /><span className="text-purple-600">১০০% কালার গ্যারান্টি</span>ও যেকোন সিজনে সারাদিন<br /> ব্যবহারযোগ্য
          </h1>
          <div className="container bg-white py-4 px-8 text-center w-fit mx-auto rounded-lg shadow-lg border-purple-300 border">
            <p className="text-black text-xl leading-relaxed">কাজের অফিস, সংসারের ব্যস্ততা, আর পড়াশোনার চাপ— সব চরিত্রেই মানিয়ে যায় এই<br /> ড্রেস। <span className="text-purple-600 font-bold">Working women, housewife, student</span>—সবার দিনের সঙ্গী আরাম,<br /> সৌন্দর্য আর নিজের মতো থাকার গল্প ✨</p>
          </div>
        </div>
      </section>

      {/* Hero / Headline */}

      {/* Product Image  */}
      <section className="bg-white">
        <div className="bg-pink-100 text-center rounded-md py-10 px-20">
          <div className="relative">
            <span className="absolute top-0 left-0 bg-white text-purple-600 font-bold py-1 px-3 rounded-full">★ Best Seller</span>
            <span className="absolute top-0 right-0 bg-white text-purple-600 font-bold py-1 px-3 rounded-full">৪৫% OFF</span>
          </div>
          <Image
            className="bg-pink-300 rounded-md mx-auto"
            src="/images/pa.jpeg"
            alt="Picture of Dress"
            width={500}
            height={200}
          />
        </div>
        <div className="container relative mx-auto w-fit bg-white text-center border-2 border-dashed border-purple-300 py-6 px-8 mt-6 rounded-lg shadow-lg">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-3">
            <span className="text-purple-600 text-xl">💜</span>
          </div>
          <p className="text-black text-xl leading-relaxed w-fit py-4 px-6">আমরা শুধু আপনার সৌন্দর্যের কথাই চিন্তা করছি না, সাথে আপনার<span className="text-purple-600 font-bold text-xl"> আরামদায়ক বিষয়টাও</span> খেয়াল রাখছি। আপনার সেই আরাম<br /> আর সৌন্দর্যের কথা চিন্তা করেই হাজির হয়েছি <span className="text-purple-600 font-bold text-xl">100% সুতি কটন ড্রেস</span> নিয়ে।</p>

        </div>
        <div className="max-w-4xl mx-auto bg-white/90 text-center shadow-lg py-6 px-8 mt-4">
          <button
            type="button"
            className="text-white text-xl bg-purple-700 py-4 px-70 rounded-lg hover:bg-purple-800 shadow-lg"
          >
            এখনই অর্ডার করুন →
          </button>
        </div>

      </section>
      {/* Product Image  */}

      {/* Best Selling Block  */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-400 py-15">
        <div className="container text-center mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white font-bold text-2xl mb-4 leading-relaxed">বেস্ট সেলিং কটন থ্রি পিস<br /><span className="text-purple-300 font-bold bg-pink-100 text-2xl py-2 px-2 rounded-md">পাচ্ছেন বিশাল ডিস্কাউন্টে</span></h3>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start border border-white bg-purple-700/90 rounded-md shadow-lg py-4 px-8 gap-4 mb-4">
                <div className="bg-white text-purple-600 text-2xl">❄</div>
                <span className="text-white text-xl">গরমের শান্তি</span>
              </div>
              <div className="flex items-start border border-white bg-purple-700/90 rounded-md shadow-lg py-4 px-8 mb-4 gap-4">
                <div className="bg-white text-purple-600 text-2xl">✓</div>
                <span className="text-white text-xl">শরীরে র‍্যাশ হবে না, চুলকাবে না</span>
              </div>
              <div className="flex items-start border border-white bg-purple-700/90 rounded-md shadow-lg py-4 px-8 gap-4">
                <div className="bg-white text-purple-600 text-2xl">✦</div>
                <span className="text-white text-xl">সারাদিন শরীরে দিবে ঠাণ্ডা অনুভূতি</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best Selling Block  */}

      {/* Special Features */}
      <section className="bg-white py-10">
        <div className="container text-center mx-auto">
          <div className="section-divider"><span className="text-purple-600">✦</span></div>
          <h2 className="text-black text-4xl font-bold mb-6">এই ড্রেসটির <span className="text-purple-600">বিশেষত্ব</span> কি কি?</h2>
          <p className="text-gray-600 mb-6">৬টি কারণে এই ড্রেস আপনার প্রিয় হবে</p>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex border border-gray-300 mb-4 rounded-md py-4 px-6 items-center hover:bg-green-100 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">✓</span>
              <span className="text-black">ঠাণ্ডা কিংবা গরম যেকোন সিজনে সারাদিন পড়ে থাকা যায়</span>
            </div>
            <div className="flex border border-gray-300 mb-4 rounded-md py-4 px-6 items-center hover:bg-green-100 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">✓</span>
              <span className="text-black">শরীরে কোন প্রকার র‍্যাশ হবে না অথবা শরীর চুলকাবে না</span>
            </div>
            <div className="flex border border-gray-300 mb-4 rounded-md py-4 px-6 items-center hover:bg-green-100 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">✓</span>
              <span className="text-black">ড্রেসটি পড়ার পর গরম লাগবে না, স্বাভাবিক ঠান্ডা অনুভূতি ফীল হবে</span>
            </div>
            <div className="flex border border-gray-300 mb-4 rounded-md py-4 px-6 items-center hover:bg-green-100 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">✓</span>
              <span className="text-black">যেকোন ধরণের অনুষ্ঠান বা প্রোগ্রামে পড়ে যেতে পারবেন</span>
            </div>
            <div className="flex border border-gray-300 mb-4 rounded-md py-4 px-6 items-center hover:bg-green-100 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">✓</span>
              <span className="text-black">আলাদা করে ইনার পড়তে হবে না</span>
            </div>
            <div className="flex border border-gray-300 mb-4 rounded-md py-6 px-6 items-center hover:bg-green-100 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">✓</span>
              <span className="text-black">কাপড়ের পরিমাণ বেশি থাকায় যেকোন স্বাস্থ্যবান আপুরাও ড্রেস বানাতে পারবে</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            {/* <Link href="#order" class="text-white text-xl bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">এখনই অর্ডার করুন →</Link> */}
            <Link href="#order" className="text-white text-xl bg-purple-700 py-4 px-80 rounded-lg hover:bg-purple-800 shadow-lg">এখনই অর্ডার করুন →</Link>
          </div>

        </div>
      </section>

      {/* Special Features */}















    </div>
  );
}
