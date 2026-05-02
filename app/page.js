import Image from "next/image";
import Link from "next/link";
import ProductImg from "./component/ProductImg";



export default function Home() {
  return (
    <div>
      {/* Top promo bar */}
      <div className="w-full bg-gradient-to-r from-purple-700 to-purple-500 text-center py-4">
        <h1 className="text-white font-bold">
          ✨ ১০০% কালার গ্যারান্টি · ক্যাশ অন ডেলিভারি · সারা বাংলাদেশে ✨
        </h1>
      </div>

      {/* Top promo bar */}

      {/* Header */}
      {/* <header className="bg-white py-6">
        <div className="flex justify-between mx-auto">
          <h1 className="text-2xl font-bold text-purple-600">STYLON</h1>
          <button 
           className="text-xl font-bold text-white bg-purple-600 py-2 px-6 rounded-full hover:bg-purple-700">
            📞Call
          </button>
        </div>
      </header> */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-purple-600 text-2xl font-bold">STYLON</h1>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:from-purple-600 hover:to-pink-600">
            📞 Call
          </button>
        </div>
      </header>

      {/* End Header */}

      {/* Hero / Headline */}
      <section className="w-full relative">
        <span className="absolute top-0 left-0 text-4xl text-purple-600 py-10 px-10">
          ✦
        </span>
        <span className="absolute bottom-0 right-0 text-2xl sm:text-2xl md:text-3xl text-purple-600 py-10 px-10">
          ✦
        </span>
        <div className="bg-gradient-to-r from-pink-200 to-purple-200 text-2xl sm:text-2xl md:text-3xl py-10 md:py-20">
          <h1 className="text-4xl md:text-4xl font-bold text-center text-black pb-4 leading-normal">
            গিফট এর জন্য মনকাড়া ড্রেস
            <br />
            <span className="text-purple-600">১০০% কালার গ্যারান্টি</span>ও
            যেকোন সিজনে সারাদিন
            <br /> ব্যবহারযোগ্য
          </h1>
          <div className="container bg-white py-4 px-8 text-center w-fit mx-auto rounded-lg shadow-lg border-purple-300 border">
            <p className="text-black text-xl leading-relaxed">
              কাজের অফিস, সংসারের ব্যস্ততা, আর পড়াশোনার চাপ— সব চরিত্রেই
              মানিয়ে যায় এই
              <br /> ড্রেস।{" "}
              <span className="text-purple-600 font-bold">
                Working women, housewife, student
              </span>
              —সবার দিনের সঙ্গী আরাম,
              <br /> সৌন্দর্য আর নিজের মতো থাকার গল্প ✨
            </p>
          </div>
        </div>
      </section>

      {/* Hero / Headline */}

      {/* Product Image  */}

      <section className="bg-white">
        <ProductImg />
        <div className="container relative mx-auto w-fit bg-white text-center border-2 border-dashed border-purple-300 py-6 px-4 mt-6 rounded-lg shadow-lg">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-3">
            <span className="text-purple-600 bg-white py-2 px-2 rounded-sm text-xl">💜</span>
          </div>
          <div className="max-w-4xl bg-white text-black text-xl leading-relaxed">
            আমরা শুধু আপনার সৌন্দর্যের কথাই চিন্তা করছি না, সাথে আপনার
            <span className="text-purple-600 font-bold text-xl">
              আরামদায়ক বিষয়টাও
            </span>
            খেয়াল রাখছি। আপনার সেই আরাম
            <br /> আর সৌন্দর্যের কথা চিন্তা করেই হাজির হয়েছি
            <span className="text-purple-600 font-bold text-xl">
              100% সুতি কটন ড্রেস
            </span>
            নিয়ে।
          </div>
        </div>
        <div className="bg-white/90 w-full text-center shadow-lg py-6 px-8 mt-4">
          <div className="mx-auto w-full max-w-4xl">
            <button
              type="button"
              className="w-full text-white text-xl bg-purple-700 py-4 rounded-lg hover:bg-purple-800 shadow-lg"
            >
              এখনই অর্ডার করুন →
            </button>
          </div>
        </div>
      </section>

      {/* <section className="bg-white">
        <div className="bg-gradient-to-r from-white-100 to-pink-100 text-center rounded-md py-10 px-20">
          <div className="relative inline-block">
            <span className="absolute top-2 left-1 bg-purple-600 text-white font-bold py-1 px-3 rounded-full text-sm">
              ★ Best Seller
            </span>
            <span className="absolute top-2 right-1 bg-white text-purple-600 border border-purple-700 font-bold py-1 px-3 rounded-full text-sm">
              ৪৫% Off
            </span>

            <Image
              className=""
              src="/images/pa.jpeg"
              alt="Picture of Dress"
              width={600}
              height={300}
            />
          </div>
        </div>
        <div className="container relative mx-auto w-fit bg-white text-center border-2 border-dashed border-purple-300 py-6 px-4 mt-6 rounded-lg shadow-lg">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-3">
            <span className="text-purple-600 bg-white py-2 px-2 rounded-sm text-xl">💜</span>
          </div>
          <div className="max-w-4xl text-black text-xl leading-relaxed">
            আমরা শুধু আপনার সৌন্দর্যের কথাই চিন্তা করছি না, সাথে আপনার
            <span className="text-purple-600 font-bold text-xl">
              {" "}
              আরামদায়ক বিষয়টাও
            </span>{" "}
            খেয়াল রাখছি। আপনার সেই আরাম
            <br /> আর সৌন্দর্যের কথা চিন্তা করেই হাজির হয়েছি{" "}
            <span className="text-purple-600 font-bold text-xl">
              100% সুতি কটন ড্রেস
            </span>{" "}
            নিয়ে।
          </div>
        </div>
        <div className="bg-white/90 w-full text-center shadow-lg py-6 px-8 mt-4">
          <div className="mx-auto w-full max-w-4xl">
            <button
              type="button"
              className="w-full text-white text-xl bg-purple-700 py-4 rounded-lg hover:bg-purple-800 shadow-lg"
            >
              এখনই অর্ডার করুন →
            </button>
          </div>
        </div>
      </section> */}
      {/* Product Image  */}

      {/* Best Selling Block  */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-400 py-15">
        <div className="container text-center mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white font-bold text-2xl mb-4 leading-relaxed">
              বেস্ট সেলিং কটন থ্রি পিস
              <br />
              <span className="text-purple-600 font-bold bg-orange-200 text-xl py-2 px-2 rounded-md">
                পাচ্ছেন বিশাল ডিস্কাউন্টে
              </span>
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start border border-white bg-purple-700/90 rounded-md shadow-lg py-4 px-8 gap-4 mb-4">
                <div className="bg-orange-200 text-purple-600 text-2xl">❄</div>
                <span className="text-white text-xl">গরমের শান্তি</span>
              </div>
              <div className="flex items-start border border-white bg-purple-700/90 rounded-md shadow-lg py-4 px-8 mb-4 gap-4">
                <div className="bg-orange-200 text-purple-600 text-2xl">✓</div>
                <span className="text-white text-xl">
                  শরীরে র‍্যাশ হবে না, চুলকাবে না
                </span>
              </div>
              <div className="flex items-start border border-white bg-purple-700/90 rounded-md shadow-lg py-4 px-8 gap-4">
                <div className="bg-orange-200 text-purple-600 text-2xl">✦</div>
                <span className="text-white text-xl">
                  সারাদিন শরীরে দিবে ঠাণ্ডা অনুভূতি
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Block  */}

      {/* Special Features */}
      <section className="bg-green-50 py-10">
        <div className="container text-center mx-auto">
          <div className="section-divider">
            <span className="text-purple-600">✦</span>
          </div>
          <h2 className="text-black text-4xl font-bold mb-6">
            এই ড্রেসটির <span className="text-purple-600">বিশেষত্ব</span> কি কি?
          </h2>
          <p className="text-gray-600 mb-6">
            ৬টি কারণে এই ড্রেস আপনার প্রিয় হবে
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex border border-gray-300 rounded-md py-4 px-6 items-center hover:bg-green-50 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">
                ✓
              </span>
              <span className="text-black">
                ঠাণ্ডা কিংবা গরম যেকোন সিজনে সারাদিন পড়ে থাকা যায়
              </span>
            </div>
            <div className="flex border border-gray-300 rounded-md py-4 px-6 items-center hover:bg-green-50 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">
                ✓
              </span>
              <span className="text-black">
                শরীরে কোন প্রকার র‍্যাশ হবে না অথবা শরীর চুলকাবে না
              </span>
            </div>
            <div className="flex border border-gray-300 rounded-md py-4 px-6 items-center hover:bg-green-50 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">
                ✓
              </span>
              <span className="text-black">
                ড্রেসটি পড়ার পর গরম লাগবে না, স্বাভাবিক ঠান্ডা অনুভূতি ফীল হবে
              </span>
            </div>
            <div className="flex border border-gray-300 rounded-md py-4 px-6 items-center hover:bg-green-50 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">
                ✓
              </span>
              <span className="text-black">
                যেকোন ধরণের অনুষ্ঠান বা প্রোগ্রামে পড়ে যেতে পারবেন
              </span>
            </div>
            <div className="flex border border-gray-300 rounded-md py-4 px-6 items-center hover:bg-green-50 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">
                ✓
              </span>
              <span className="text-black">আলাদা করে ইনার পড়তে হবে না</span>
            </div>
            <div className="flex border border-gray-300 rounded-md py-6 px-6 items-center hover:bg-green-50 gap-4">
              <span className="text-white bg-green-600 rounded-full py-2 px-4">
                ✓
              </span>
              <span className="text-black">
                কাপড়ের পরিমাণ বেশি থাকায় যেকোন স্বাস্থ্যবান আপুরাও ড্রেস
                বানাতে পারবে
              </span>
            </div>
          </div>

          <div className="w-full text-center py-4 mt-4">
            <div className="mx-auto w-full max-w-4xl">
              <button
                type="button"
                className="w-full text-white text-xl bg-purple-700 py-4 rounded-lg hover:bg-purple-800 shadow-lg"
              >
                এখনই অর্ডার করুন →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}

      {/* Product Description / Specs  */}

      <section className="bg-amber-50 py-10">
        <div className="container text-center mx-auto">
          <div className="text-purple-600">
            <span className="text-purple-600">◆</span>
          </div>
          <h2 className="text-black font-bold text-2xl">
            প্রোডাক্ট{" "}
            <span className="text-purple-600 font-bold text-2xl">
              ডেসক্রিপশন
            </span>
          </h2>
          <p className="text-gray-600 mt-6">সম্পূর্ণ স্পেসিফিকেশন এক নজরে</p>

          <div className="max-w-4xl mx-auto border border-gray-300 rounded-md shadow-lg p-6 mt-6">
            <div className="flex justify-between bg-white border-b border-gray-400 py-4 px-4">
              <span className="text-black font-medium ">জামা</span>
              <span className="text-black font-semibold">
                বেক্সি (কটন ড্রেস)
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-400 py-4 px-4">
              <span className="text-black font-medium">বডি</span>
              <span className="text-black font-semibold">৫০"+</span>
            </div>
            <div className="flex justify-between bg-white border-b border-gray-400 py-4 px-4">
              <span className="text-black font-medium">লম্বা</span>
              <span className="text-black font-semibold">৪৭"+</span>
            </div>
            <div className="flex justify-between border-b border-gray-400 py-4 px-4">
              <span className="text-black font-medium">ওড়না</span>
              <div className="flex flex-col items-end">
                <span className="text-black font-semibold">৫.৫ হাত</span>
                <span className="text-yellow-800 text-sm text-bold">
                  অলওভার ওড়না সুতার কাজ
                </span>
              </div>
            </div>
            <div className="flex justify-between bg-white border-b border-gray-400 py-4 px-4">
              <span className="text-gray-600 font-medium">পায়জামা</span>
              <span className="text-black font-semibold">প্রিমিয়াম কটন</span>
            </div>
          </div>
          <div className="w-full text-center py-4 mt-4">
            <div className="mx-auto w-full max-w-4xl">
              <button
                type="button"
                className="w-full text-white text-xl bg-purple-700 py-4 rounded-lg hover:bg-purple-800 shadow-lg"
              >
                এখনই অর্ডার করুন →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description / Specs  */}

      {/* Price Block */}
      <section className="bg-gradient-to-r from-purple-100 to-white py-10">
        <div className="container relative max-w-4xl bg-white text-center mx-auto border-2 border-purple-900 rounded-lg shadow-lg py-4 px-6">

          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-purple-700 font-bold py-2 px-4 rounded-full text-sm text-white">স্টক ক্লিয়ারেন্স অফার</span>

          <div className="flex justify-center items-center gap-2">
            <span className="text-black py-4">
              প্রোডাক্টের রেগুলার বাজার মূল্য
            </span>
            <span className="text-gray-500 line-through">৳ ২,৮৫০</span>
          </div>
          <div className="text-purple-700 text-xl py-4">
            স্টক ক্লিয়ারেন্স অফার মূল্য
          </div>
          <div className="text-purple-600 text-bold text-6xl">
            <span className="text-black font-bold text-xl">৳</span>
            <span className="text-purple-600 font-bold text-6xl">২,২৫০</span>
          </div>
          <div className="text-gray-500 text-sm py-4">
            (ডেলিভারি চার্জ প্রযোজ্য)
          </div>
          <div className="text-purple-900 font-bold py-2 px-4 rounded-full bg-orange-200 w-fit mx-auto">
            🎉 সাশ্রয় হবে ৳ ৬০০
          </div>

        </div>
      </section>
      {/* Price Block */}

      {/* Warning */}
      <section className="bg-gradient-to-r from-purple-100 to-white py-10">
        <div className="max-w-4xl mx-auto bg-orange-100 rounded-lg shadow-lg border-2 border-orange-400 py-6 px-8 mt-10">
          <div className="">
            <div className="flex items-center gap-2 mb-4 border-b border-dashed border-orange-400">
              <span className="text-orange-500 font-bold text-2xl py-2">⚠</span>
              <span className="text-orange-500 font-bold py-2">
                একটি সতর্ক বার্তা!!
              </span>
            </div>
            <p className="text-gray-500 sm:text-sm md:text-md">
              সম্মানিত গ্রাহক, অর্ডার কনফার্ম করার পর যথাযথ কারণ ছাড়া পণ্য না
              উঠালে আমরা আইনগতভাবে ব্যবস্থা নিতে বাধ্য থাকিব। কেননা, একটি
              পার্সেল বুকিং করার পর তা রিটার্ন আসলে কুরিয়ার কোম্পানি আমাদের
              নিকট প্রায় ২০০ টাকা চার্জ করে। তাই অনুগ্রহ করে অযথা অর্ডার
              কনফার্ম করবেন না। বিস্তারিত তথ্য জানার পর পণ্যটি কেবল আপনার পছন্দ
              হলেই অর্ডারটি কনফার্ম করার অনুরোধ রইল। ধন্যবাদ।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-pink-200 to-purple-400 py-10 text-center">
        <h3 className="text-black text-xl font-bold">
          যেকোন প্রয়োজনে কল করতে পারেন
        </h3>
        <Link
          href="tel:01741476000"
          className="text-purple-600 text-xl bg-white py-3 px-6 border-2 rounded-full border-purple-600 font-bold mt-4 inline-block"
        >
          📞 01741-476000
        </Link>
      </section>

      {/* Contact Section */}

      {/* Order Section */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-t border-r border-b border-l-4 border-indigo-500 rounded-md shadow-lg py-6 px-8 mt-10">
            <p className="text-black text-sm mb-4">
              {" "}
              ড্রেসটি অর্ডার করতে নিচের ফর্মটি সম্পূর্ণরূপে পূরণ করে নিচের{" "}
              <span className="text-bold text-black">
                "কনফার্ম অর্ডার"
              </span>{" "}
              বাটনে ক্লিক করুন। ২০ সেকেন্ড অপেক্ষা করুন। অর্ডার কনফার্ম হয়ে
              যাবে।
            </p>
          </div>
          {/* Your Products... ai sectionta amk aktu practice korte hbe */}
          <div className="bg-white/60 border-2 border-gray-300 rounded-lg shadow-md mt-4">
            <div className="text-black font-bold border-b border-gray-800 py-4 px-4 mb-4">
              Your Products
            </div>

            <div className="flex justify-between items-center gap-6 py-4 px-6">
              {/* Product Image */}
              <div className="w-20 h-20 overflow-hidden rounded-md border border-gray-300">
                <Image
                  src="/images/pa.jpeg"
                  alt="Picture of dress"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col items-start gap-2 flex-1">
                <div className="text-black font-bold">
                  Snow White Cotton Katha Stich Dress
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
                  <button className="bg-gray-200 text-black font-bold px-3 py-1 hover:bg-purple-100 hover:text-purple-600">
                    −
                  </button>
                  <span className="text-black font-bold px-4">1</span>
                  <button className="bg-gray-200 text-black font-bold px-3 py-1 hover:bg-purple-100 hover:text-purple-600">
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-purple-600 text-xl font-bold whitespace-nowrap">
                ৳ ২,৪৮০
              </div>
            </div>
          </div>

          {/* Billing Details */}
          <div className="bg-white border border-gray-300 rounded-md shadow-lg px-4 py-4 mt-4">
            <div className="text-black font-bold border-b border-gray-400 py-4 mb-4">
              Billing Details
            </div>

            <div className="flex flex-col items-start gap-2 mt-4">
              <label className="text-black">
                আপনার নাম <span className="text-purple-600 text-xl">*</span>
              </label>
              <input
                type="text"
                className="text-gray-400 border border-gray-400 rounded-md w-full py-2 px-2"
                placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                required
              />
            </div>

            <div className="flex flex-col items-start gap-2 mt-4">
              <label className="text-black">
                সম্পূর্ণ ঠিকানা{" "}
                <span className="text-purple-600 text-xl">*</span>
              </label>
              <input
                type="text"
                className="text-gray-400 border border-gray-400 rounded-md w-full py-2 px-2"
                placeholder="বাসা/হোল্ডিং, রোড, এলাকা"
                required
              />
            </div>

            <div className="flex justify-between gap-4 mt-4">
              <div className="flex flex-col items-start gap-2">
                <label className="text-black">
                  মোবাইল নম্বর<span className="text-purple-600 text-xl">*</span>
                </label>
                <input
                  type="tel"
                  className="text-gray-400 border border-gray-400 rounded-md py-2 px-2"
                  placeholder="01XXXXXXXXX"
                  required
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label className="text-black">
                  থানার নাম <span className="text-purple-600 text-xl">*</span>
                </label>
                <input
                  type="text"
                  className="text-gray-400 border border-gray-400 rounded-md w-full  py-2 px-2"
                  placeholder="যেমন: মিরপুর"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 mt-4">
              <label className="text-black">
                Country / Region{" "}
                <span className="text-purple-600 text-xl">*</span>
              </label>
              <select
                className="text-gray-400 border border-gray-400 rounded-md w-full py-2 px-2"
                required
              >
                <option value="Bangladesh">Bangladesh</option>
              </select>
            </div>
          </div>

          {/* Shipping  */}
          <div className="border border-gray-400 rounded-md shadow-lg py-6 px-6 mt-8">
            <div className="text-black font-bold border-b border-gray-800 py-4 px-2 mb-4">
              Shipping
            </div>
            <input
              type="text"
              className="bg-white/60 text-gray-400 font-bold text-center py-4 px-10 w-full mx-auto"
              placeholder=" Enter your address to view shipping options."
            />
          </div>

          {/* Your Order */}
          <div className="border border-gray-400 rounded-md shadow-lg py-6 px-6 mt-8">
            <div className="text-black font-bold border-b py-2">Your Order</div>

            <div className="flex justify-between border-b py-4 px-2">
              <span className="text-gray-500">
                Snow White Cotton Katha Stich Dress ×{" "}
                <span id="orderQty">1</span>
              </span>
              <span className="text-black font-bold">৳ ২,২৫০</span>
            </div>
            <div className="flex justify-between border-b py-4 px-2">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-black font-bold">৳ ২,২৫০</span>
            </div>
            <div className="flex justify-between border-b py-4 px-2">
              <span className="text-gray-500">Shipping</span>
              <span className="text-gray-500 text-sm">
                Enter address to view
              </span>
            </div>
            <div className="bg-purple-100 py-4 px-6 mt-4 rounded-md shadow-lg flex justify-between items-center">
              <span className="text-black font-bold">Total</span>
              <span className="text-purple-600 font-bold">৳ ২,২৫০</span>
            </div>
          </div>
          {/* Payment Method  */}
          <div className="border border-gray-400 rounded-md shadow-lg py-6 px-6 mt-8">
            <div className="text-black font-bold border-b border-gray-800 py-4 px-2 mb-4">
              Payment Method
            </div>
            <label className="border border-purple-700 rounded-md py-4 px-4 mb-4 gap-2 flex items-center">
              <input type="radio" className="" name="payment" defaultChecked />
              <div className="">
                <strong className="text-black font-bold">
                  Cash on delivery
                </strong>
                <p className="text-gray-700">Pay with cash upon delivery.</p>
              </div>
            </label>

            <div className="bg-gray-100 text-gray-500 text-sm rounded-md py-2 px-2 mt-4">
              Since your browser does not support JavaScript, or it is disabled,
              please ensure you click the{" "}
              <span className="font-bold">Update Totals</span> button before
              placing your order. You may be charged more than the amount stated
              above if you fail to do so.
            </div>
            <div className="mt-6">
              <button className="bg-purple-600 text-white font-bold py-4 px-8 rounded-md hover:bg-purple-700 text-center text-xl w-full">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Order  Section */}

      {/* Footer Info  */}
      <footer>
        <div className="text-center mx-auto py-10">
          <div className="text-white text-4xl font-extralight">STYLON</div>
          <div className="text-orange-100 text-sm font-extralight py-6">
            Crafted with care, delivered with trust
          </div>

          <div className="footer-info">
            <div className="text-white mb-4">
              📍 ১২/সি, রোড - ২১, প্লট - ১/১, পল্লবী, মিরপুর, ঢাকা - ১২১৬
            </div>
            <div className="mb-4">
              📞 <Link href="tel:01741476000">01741-476000</Link>
            </div>
            <div className="footer-info-item mb-6">
              ✉{" "}
              <Link
                className="text-orange-200 hover:text-orange-300 font-bold"
                href="mailto:stylonbd@gmail.com"
              >
                stylonbd@gmail.com
              </Link>
            </div>
          </div>

          <div className="text-white text-lg font-bold mb-4">
            Important Links
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <Link
              className="text-white hover:bg-purple-600 font-bold py-2 px-6 rounded-full"
              href="https://shop.stylonbd.com/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white hover:bg-purple-600 font-bold py-2 px-6 rounded-full"
              href="https://shop.stylonbd.com/terms-conditions"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="text-white text-sm mt-8">
            © 2026 shop.stylonbd.com | Developed By{" "}
            <Link
              className="text-orange-200 font-bold"
              href="https://servicekey.com.bd"
            >
              Service Key
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
