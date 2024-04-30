import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <img className="h-20" src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/FX5ATkass4-no-background-VmcZHSX7xE4ng29ATNphGUdb388fxH.png" alt="Company name" />
                        <p className="text-sm leading-6 text-white">Store for all your clothing needs.</p>
                        <div className="flex space-x-6">
                            {/* Social media icons */}
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                {/* SVG for Facebook */}
                            </a>
                            {/* Add other social media icons similarly */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Commerce</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Insights</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Guides</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">API Status</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Jobs</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Press</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Partners</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Claim</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-500">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-500/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-white">&copy; 2020 Your Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
