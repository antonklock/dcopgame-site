export default function SirensBackground() {
  return (
    <div className="fixedz-10 opacity-100">
      <div className="fixed top-1/3 left-1/4 rotate-45">
        <div className="h-20 w-96 bg-red-900 rounded-full blur-super animate-pulseSine-1 opacity-100"></div>
      </div>

      <div className="fixed top-1/4 left-1/4 rotate-0">
        <div className="h-20 w-96 bg-blue-900 rounded-full blur-super animate-pulseSine-1 opacity-100 mix-blend-multiply"></div>
      </div>

      <div className="fixed top-1/4 left-3/4 -rotate-45 mr-20">
        <div className="h-20 w-96 bg-red-900 rounded-full blur-super animate-pulseSine-3 opacity-100 mix-blend-multiply"></div>
      </div>
      <div className="fixed top-80 left-3/4 -rotate-45 ml-20">
        <div className="h-20 w-96 bg-blue-900 rounded-full blur-super animate-pulseSine-5 opacity-100 mix-blend-multiply"></div>
      </div>

      <div className="fixed top-3/4 left-1/4 rotate-12 ml-40">
        <div className="h-20 w-96 bg-blue-900 rounded-full blur-super animate-pulseSine-2 opacity-100 mix-blend-multiply"></div>
      </div>
      <div className="fixed top-3/4 left-1/4 rotate-12 ml-96">
        <div className="h-20 w-96 bg-red-900 rounded-full blur-super animate-pulseSine-5 opacity-100 mix-blend-multiply"></div>
      </div>
    </div>
  );
}
