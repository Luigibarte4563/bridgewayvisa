import paymentChannel from "../../../assets/payment_channel.webp";

export default function Payment() {
  return (
    <section
      id="payment"
      className="scroll-mt-[60px] bg-zinc-950 text-white py-16 md:py-20 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-10 md:mb-14 tracking-wide">
          Payment Channels
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-xl mx-auto">
            <div className="relative">
              <img
                src={paymentChannel}
                alt="Official Payment Channels"
                className="w-full h-auto max-h-[400px] object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            <div className="mt-10 text-center">
              <div className="w-12 h-[1px] bg-red-900/50 mx-auto mb-4" />
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
                Secure & Verified Transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
