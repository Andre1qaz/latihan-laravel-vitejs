import React from 'react'
import { Head, Link } from '@inertiajs/react'
import { BookOpen, Video, Newspaper, Package, ArrowRight, Sparkles, Code, Zap } from 'lucide-react'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Welcome" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative min-h-screen flex flex-col">
          {/* Header */}
          <header className="w-full px-6 py-6 lg:py-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg">
                    <svg className="h-7 w-7 text-white" viewBox="0 0 62 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-slate-950"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-white">Laravel</h1>
                  <p className="text-xs text-slate-400">The PHP Framework</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex items-center gap-2">
                {auth.user ? (
                  <Link
                    href={route('dashboard')}
                    className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all border border-white/10"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href={route('login')}
                      className="px-4 py-2 rounded-xl text-white font-medium hover:bg-white/10 transition-all"
                    >
                      Log in
                    </Link>
                    <Link
                      href={route('register')}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium hover:from-red-700 hover:to-orange-700 transition-all shadow-lg"
                    >
                      Register
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex items-center justify-center px-6 pb-20">
            <div className="max-w-7xl w-full">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm mb-6">
                  <Sparkles className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-red-400">Laravel {laravelVersion}</span>
                </div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  The PHP Framework<br />
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">for Web Artisans</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Laravel is a web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the small things.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <a
                    href="https://laravel.com/docs"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:from-red-700 hover:to-orange-700 transition-all shadow-xl flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/laravel/laravel"
                    className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2"
                  >
                    <Code className="w-5 h-5" />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Documentation Card - Large */}
                <div className="lg:row-span-2 group">
                  <a href="https://laravel.com/docs" className="block h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10">
                    <div className="mb-6">
                      <div className="h-14 w-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-7 h-7 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Documentation</h3>
                      <p className="text-slate-300">
                        Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end.
                      </p>
                    </div>
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
                      <div className="h-full w-full flex items-center justify-center">
                        <Code className="w-16 h-16 text-slate-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4 text-red-400 font-medium group-hover:translate-x-2 transition-transform">
                      Read Docs
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </a>
                </div>

                {/* Laracasts Card */}
                <a href="https://laracasts.com" className="group block rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Video className="w-7 h-7 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Laracasts</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out and massively level up your development skills.
                      </p>
                      <div className="flex items-center text-red-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                        Watch Videos
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Laravel News Card */}
                <a href="https://laravel-news.com" className="group block rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Newspaper className="w-7 h-7 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Laravel News</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem.
                      </p>
                      <div className="flex items-center text-red-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                        Read News
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Vibrant Ecosystem Card */}
                <div className="lg:col-span-2 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-14 w-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Package className="w-7 h-7 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Vibrant Ecosystem</h3>
                      <p className="text-slate-300">
                        Laravel's robust library of first-party tools and libraries help you take your projects to the next level.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Forge', 'Vapor', 'Nova', 'Envoyer', 'Horizon', 'Telescope', 'Sanctum', 'Cashier'].map((tool) => (
                      <div key={tool} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all cursor-pointer">
                        <span className="text-sm font-semibold text-white">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="py-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Zap className="w-4 h-4 text-red-500" />
              <span>Laravel v{laravelVersion}</span>
              <span>•</span>
              <span>PHP v{phpVersion}</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}