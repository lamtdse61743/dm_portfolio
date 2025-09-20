(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_97a6d6._.js", {

"[project]/app/components/HeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>HeroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
function HeroSection() {
    _s();
    const [selectedStack, setSelectedStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hero');
    // Helper function to get the correct image path for GitHub Pages
    const getImagePath = (imagePath)=>{
        // For GitHub Pages deployment, we need to add the repository name as basePath
        // We can detect if we're in production by checking the current location
        if ("TURBOPACK compile-time truthy", 1) {
            // Client-side: check if we're on GitHub Pages
            const isGitHubPages = window.location.hostname === 'lamtdse61743.github.io';
            return isGitHubPages ? `/Portfolio${imagePath}` : imagePath;
        } else {
            "TURBOPACK unreachable";
        }
    };
    // Smooth scroll function with enhanced smoothness
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // Account for fixed navigation height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            // Use a more sophisticated smooth scroll
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
            let start = null;
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                // Easing function for smoother animation
                const ease = (t)=>t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                const run = startPosition + distance * ease(progress);
                window.scrollTo(0, run);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            requestAnimationFrame(animation);
        }
    };
    // Track active section based on scroll position with throttling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            let ticking = false;
            const handleScroll = {
                "HeroSection.useEffect.handleScroll": ()=>{
                    if (!ticking) {
                        requestAnimationFrame({
                            "HeroSection.useEffect.handleScroll": ()=>{
                                const sections = [
                                    'hero',
                                    'skills',
                                    'experience',
                                    'education',
                                    'publications'
                                ];
                                const scrollPosition = window.scrollY + 120; // Adjusted offset
                                for (const section of sections){
                                    const element = document.getElementById(section);
                                    if (element) {
                                        const { offsetTop, offsetHeight } = element;
                                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                            setActiveSection(section);
                                            break;
                                        }
                                    }
                                }
                                ticking = false;
                            }
                        }["HeroSection.useEffect.handleScroll"]);
                        ticking = true;
                    }
                }
            }["HeroSection.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen relative overflow-hidden py-24 md:py-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-10",
                    style: {
                        backgroundImage: `url(${getImagePath('/grid.svg')})`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/HeroSection.tsx",
                    lineNumber: 92,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 91,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.5
                },
                className: "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-700/50 px-8 py-4 shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-8",
                    children: [
                        {
                            id: 'hero',
                            label: 'Contact'
                        },
                        {
                            id: 'skills',
                            label: 'Skills'
                        },
                        {
                            id: 'experience',
                            label: 'Experience'
                        },
                        {
                            id: 'education',
                            label: 'Education'
                        },
                        {
                            id: 'publications',
                            label: 'Publications'
                        }
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToSection(item.id),
                            className: `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id ? 'bg-blue-500/20 text-blue-400 shadow-lg' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`,
                            children: [
                                activeSection === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layoutId: "activeTab",
                                    className: "absolute inset-0 bg-blue-500/10 rounded-full border border-blue-500/30",
                                    initial: false,
                                    transition: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSection.tsx",
                                    lineNumber: 122,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/app/components/HeroSection.tsx",
                            lineNumber: 113,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/HeroSection.tsx",
                    lineNumber: 105,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 99,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "hero",
                className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "text-center mb-8 md:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "mb-6 md:mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: getImagePath('/profile.jpg'),
                                        alt: "Lam Dinh Trinh Profile Picture",
                                        className: "w-full h-full object-cover rounded-full bg-gray-900"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 145,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSection.tsx",
                                    lineNumber: 144,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 138,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 md:space-y-4 mb-6 md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500",
                                        children: "Lam Dinh Trinh"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 154,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-4xl font-bold text-white",
                                        children: "Marketing Specialist & AI Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 157,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto",
                                        children: "I bridge the gap between IT innovation and business operations, applying AI-driven strategies to marketing campaigns, customer engagement, and data analytics. Experienced in scaling retail businesses and optimizing digital performance through intelligent automation."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 158,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 153,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row justify-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:lamtdse61743@gmail.com",
                                        className: "px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 8
                                            }, this),
                                            "Get in Touch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://drive.google.com/file/d/12nHCDdA3yIBtXnBmUSEzRSJgUZyx6zdv/view?usp=sharing",
                                        target: "_blank",
                                        className: "px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 180,
                                                columnNumber: 8
                                            }, this),
                                            "View Resume"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 175,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 164,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/lamtdse61743",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 201,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 200,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 194,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/in/lam-dinh-9104b6306/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 211,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 210,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 204,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 193,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 text-gray-400 mb-6 md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 219,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 225,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 218,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "London, Ontario, Canada"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 227,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 217,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mb-6 md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-2 md:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm",
                                                children: "Meta Ads Manager"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 232,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm",
                                                children: "Google Ads"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 233,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm",
                                                children: "TikTok Ads"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 234,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm",
                                                children: "SEO/SEM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 235,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm",
                                                children: "Python"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 236,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm",
                                                children: "JavaScript"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 237,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm",
                                                children: "HTML"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 238,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 231,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-2 md:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm",
                                                children: "RESTful API"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 241,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm",
                                                children: "Node.js"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 242,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm",
                                                children: "Next.js"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 243,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm",
                                                children: "OpenAI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 244,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm",
                                                children: "GitHub Copilot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 245,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm",
                                                children: "Google Analytics"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 246,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm",
                                                children: "Entrepreneurship"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 247,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm",
                                                children: "Team Leadership"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 248,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 240,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 230,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 136,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "skills",
                        className: "w-full max-w-5xl mx-auto relative px-2 md:px-4 scroll-mt-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'}`,
                                        onMouseEnter: ()=>setSelectedStack('backend'),
                                        onMouseLeave: ()=>setSelectedStack(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400",
                                                children: "Digital Marketing & Campaign Management"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 270,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Meta Ads Manager, Google Ads, TikTok Ads"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 11
                                                            }, this),
                                                            "SEO/SEM Optimization & Content Creation"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Campaign Performance Analytics & ROI Analysis"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Social Media Strategy & Customer Engagement"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 11
                                                            }, this),
                                                            "A/B Testing & Conversion Optimization"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 271,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 264,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'}`,
                                        onMouseEnter: ()=>setSelectedStack('frontend'),
                                        onMouseLeave: ()=>setSelectedStack(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400",
                                                children: "Business Intelligence & Data Analytics"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 302,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Python for Data Processing & Campaign Analysis"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Google Analytics & Performance Tracking"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Customer Data Segmentation & Behavior Analysis"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Business Dashboard Development"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Marketing Attribution & Revenue Analytics"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 303,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 296,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'}`,
                                        onMouseEnter: ()=>setSelectedStack('devops'),
                                        onMouseLeave: ()=>setSelectedStack(null),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400",
                                                children: "AI Applications & Automation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 336,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 11
                                                            }, this),
                                                            "OpenAI APIs & ChatGPT Integration"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Marketing Content Automation & AI-Generated Visuals"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Customer Service Chatbots & Support Automation"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 11
                                                            }, this),
                                                            "GitHub Copilot & AI-Assisted Development"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 11
                                                            }, this),
                                                            "Web Development (HTML, CSS, JavaScript, Next.js)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 337,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 330,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 261,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/HeroSection.tsx",
                            lineNumber: 255,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 254,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: "experience",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4
                        },
                        className: "w-full max-w-4xl mx-auto mt-12 md:mt-16 px-2 md:px-4 scroll-mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500",
                                children: "Professional Experience"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 372,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-8 md:mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl md:text-2xl font-bold text-purple-400 mb-2",
                                        children: "Founder & Entrepreneur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 378,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-lg text-gray-400 mb-1",
                                        children: "August 2019 – Present"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 379,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl font-semibold text-white",
                                        children: "LDWatch - Watch Retail Business, Vietnam"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 380,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 377,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 md:space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.6
                                        },
                                        className: "bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-blue-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-lg md:text-xl font-bold text-blue-400 mb-3",
                                                            children: "Business Management & Negotiation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm md:text-base text-gray-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 405,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Founded and scaled a retail business, overseeing operations from supplier contracts to customer delivery"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 406,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 409,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "Demonstrated strong negotiation skills with ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        className: "text-blue-400",
                                                                                        children: "Casio headquarters"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 410,
                                                                                        columnNumber: 63
                                                                                    }, this),
                                                                                    " and Shenzhen watch brands"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 410,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 413,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Secured favorable pricing and supply terms to maximize profitability"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 414,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: getImagePath('/cronusartcollaborationexhibition.jpg'),
                                                                    alt: "CronusArt Collaboration Exhibition",
                                                                    className: "w-full max-w-md rounded-lg border border-gray-700 shadow-lg mb-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-400 text-center",
                                                                    children: "Attending the CronusArt Collaboration Exhibition in Shenzhen, representing LDWatch in partnership with a leading Chinese watch brand."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 14
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 392,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 386,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.7
                                        },
                                        className: "bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-purple-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-lg md:text-xl font-bold text-purple-400 mb-3",
                                                            children: "AI & Marketing Innovation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm md:text-base text-gray-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 451,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Applied AI expertise to automate content creation (product descriptions, promotional posts) and deploy chatbots for customer support"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 452,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 450,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 455,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Leveraged generative AI to customize product visuals (color variations) based on customer preferences, offering broader choices and enhancing personalization"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 456,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 454,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 459,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "Executed digital campaigns across Facebook, Instagram, and e-commerce platforms, increasing ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        className: "text-purple-400",
                                                                                        children: "sales by 35%"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 460,
                                                                                        columnNumber: 111
                                                                                    }, this),
                                                                                    " in the first year"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 460,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 458,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 438,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 432,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.8
                                        },
                                        className: "bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-teal-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-lg md:text-xl font-bold text-teal-400 mb-3",
                                                            children: "Website Development & SEO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm md:text-base text-gray-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 488,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Designed, developed, and maintained the LDWatch retail website as a product showcase"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 489,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 492,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Applied strong knowledge of HTML and CSS to build optimized landing pages for promotions and new product releases"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 493,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 496,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "Implemented SEO best practices (metadata, keyword optimization, structured product pages), increasing ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        className: "text-teal-400",
                                                                                        children: "organic traffic by 60%"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 497,
                                                                                        columnNumber: 121
                                                                                    }, this),
                                                                                    " and reducing ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        className: "text-teal-400",
                                                                                        children: "bounce rate by 25%"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 497,
                                                                                        columnNumber: 200
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 497,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 495,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 475,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 469,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.9
                                        },
                                        className: "bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-blue-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-lg md:text-xl font-bold text-blue-400 mb-3",
                                                            children: "Marketing Campaign Analytics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 text-sm md:text-base text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2 text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 525,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "Managed and optimized ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "464+ paid social campaigns"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 526,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        " across Facebook/Instagram with total spend of ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "$33K CAD"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 526,
                                                                                            columnNumber: 157
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 526,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 524,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 529,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "Generated ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "12,064 conversations"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 530,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        " and ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "10,543 new contacts"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 530,
                                                                                            columnNumber: 97
                                                                                        }, this),
                                                                                        " over ~3.1 years"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 530,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 533,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "Delivered an overall average of ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "~316 reach per CAD"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 534,
                                                                                            columnNumber: 51
                                                                                        }, this),
                                                                                        ", ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "~0.37 conversations per CAD"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 534,
                                                                                            columnNumber: 114
                                                                                        }, this),
                                                                                        " and ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "~0.32 contacts per CAD"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 534,
                                                                                            columnNumber: 189
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 534,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 532,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 537,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "Top campaigns achieved up to ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "3,328 reach per CAD"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 538,
                                                                                            columnNumber: 48
                                                                                        }, this),
                                                                                        " and ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            className: "text-blue-400",
                                                                                            children: "2.48 conversations per CAD"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 538,
                                                                                            columnNumber: 115
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 538,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 536,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 523,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rounded-lg overflow-hidden mb-4 border border-gray-700 bg-gray-900/40",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: getImagePath('/campaign.jpg'),
                                                                                    alt: "Marketing Campaign Analytics Overview",
                                                                                    className: "w-full h-auto object-cover"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 545,
                                                                                    columnNumber: 15
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-gray-400 text-center mt-2",
                                                                                    children: "Overview of my real campaign performance dashboard, visualizing key metrics and results from 464+ paid social campaigns."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 550,
                                                                                    columnNumber: 15
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 544,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                            className: "text-lg font-semibold text-blue-400 mb-4",
                                                                            children: "Campaign Performance Analytics Dashboard"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 552,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-gray-800/30 rounded-lg p-4 border border-gray-700",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "text-sm font-semibold text-green-400 mb-3",
                                                                                            children: "Top 15 Most Efficient Campaigns"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 558,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-lg overflow-hidden",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: getImagePath('/top15mostefficientcampaign.png'),
                                                                                                alt: "Top 15 Most Efficient Campaign Performance",
                                                                                                className: "w-full h-auto object-cover border border-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 560,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 559,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-400 mt-2 leading-relaxed",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-green-400",
                                                                                                    children: "Performance Excellence:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 567,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " This analysis reveals my top-tier campaigns that consistently delivered exceptional value. These campaigns represent the ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-green-300",
                                                                                                    children: "gold standard"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 568,
                                                                                                    columnNumber: 45
                                                                                                }, this),
                                                                                                " of my portfolio, showing how my strategic targeting, creative optimization, and budget allocation converged to create campaigns achieving ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-green-300",
                                                                                                    children: "2.48 conversations per CAD"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 569,
                                                                                                    columnNumber: 100
                                                                                                }, this),
                                                                                                "and ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-green-300",
                                                                                                    children: "3,328 reach per CAD"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 570,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                " - significantly outperforming industry benchmarks."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 566,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 557,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-gray-800/30 rounded-lg p-4 border border-gray-700",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "text-sm font-semibold text-purple-400 mb-3",
                                                                                            children: "Top 10 Campaign Reach Efficiency"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 576,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-lg overflow-hidden",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: getImagePath('/top10campaignreachefficiency.png'),
                                                                                                alt: "Top 10 Campaign Reach Efficiency Analysis",
                                                                                                className: "w-full h-auto object-cover border border-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 578,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 577,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-400 mt-2 leading-relaxed",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-purple-400",
                                                                                                    children: "Reach Optimization Mastery:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 585,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " This chart demonstrates my systematic approach to maximizing audience reach while maintaining cost efficiency. Through ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-purple-300",
                                                                                                    children: "A/B testing creative formats"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 586,
                                                                                                    columnNumber: 58
                                                                                                }, this),
                                                                                                ", refining audience targeting parameters, and optimizing bid strategies, I achieved remarkable reach efficiency. The data shows how my strategic campaign structure and ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-purple-300",
                                                                                                    children: "precise audience segmentation"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 588,
                                                                                                    columnNumber: 19
                                                                                                }, this),
                                                                                                " enabled me to reach more potential customers per dollar spent than traditional broad-targeting approaches."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 584,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 575,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-gray-800/30 rounded-lg p-4 border border-gray-700",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "text-sm font-semibold text-teal-400 mb-3",
                                                                                            children: "Conversion Funnel Efficiency"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 594,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-lg overflow-hidden",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: getImagePath('/top10campaignconversionfunnelefficiency.png'),
                                                                                                alt: "Top 10 Campaign Conversion Funnel Efficiency",
                                                                                                className: "w-full h-auto object-cover border border-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 596,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 595,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-400 mt-2 leading-relaxed",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-teal-400",
                                                                                                    children: "Conversion Path Intelligence:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 603,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " This analysis reveals the customer journey from initial impression to meaningful conversation. By tracking and optimizing each stage of the funnel, I identified",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-teal-300",
                                                                                                    children: "friction points"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 605,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " and implemented targeted improvements. The data shows how",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-teal-300",
                                                                                                    children: "landing page optimization"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 606,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                ", creative-message alignment, and strategic call-to-action placement increased conversion rates, ultimately generating ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-teal-300",
                                                                                                    children: "12,064 quality conversations"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 607,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                " from my reach efforts."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 602,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 593,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-gray-800/30 rounded-lg p-4 border border-gray-700",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "text-sm font-semibold text-yellow-400 mb-3",
                                                                                            children: "Strategic Budget Allocation"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 613,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-lg overflow-hidden",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: getImagePath('/top15campaignspend.png'),
                                                                                                alt: "Top 15 Campaign Spend Distribution",
                                                                                                className: "w-full h-auto object-cover border border-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 615,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 614,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-400 mt-2 leading-relaxed",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-yellow-400",
                                                                                                    children: "Investment Strategy Excellence:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 622,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " This spend analysis demonstrates my sophisticated budget management across my ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-yellow-300",
                                                                                                    children: "$33K CAD total investment"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 623,
                                                                                                    columnNumber: 25
                                                                                                }, this),
                                                                                                ". Rather than equal distribution, I employed",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-yellow-300",
                                                                                                    children: "performance-based scaling"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 624,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " - allocating larger budgets to proven high-performers while maintaining smaller test budgets for experimental campaigns. This data-driven approach to budget allocation maximized overall portfolio ROI and ensured ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-yellow-300",
                                                                                                    children: "optimal resource utilization"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 626,
                                                                                                    columnNumber: 41
                                                                                                }, this),
                                                                                                " across all 464+ campaigns."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 621,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 612,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-gray-800/30 rounded-lg p-4 border border-gray-700",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "text-sm font-semibold text-red-400 mb-3",
                                                                                            children: "Performance Optimization Insights"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 632,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-lg overflow-hidden",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: getImagePath('/top10leastefficientcycampaign.png'),
                                                                                                alt: "Least Efficient Campaign Analysis for Optimization",
                                                                                                className: "w-full h-auto object-cover border border-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 634,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 633,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-400 mt-2 leading-relaxed",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-red-400",
                                                                                                    children: "Learning from Underperformers:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 641,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " This critical analysis identifies campaigns with lower efficiency ratios, providing invaluable insights for ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-red-300",
                                                                                                    children: "continuous optimization"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 642,
                                                                                                    columnNumber: 49
                                                                                                }, this),
                                                                                                ". Rather than simply pausing these campaigns, I analyzed common patterns - audience misalignment, creative fatigue, or seasonal factors - to inform",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-red-300",
                                                                                                    children: "strategic pivots"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 644,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                ". This data-driven approach to identifying and addressing underperformance enabled me to ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-red-300",
                                                                                                    children: "reallocate budgets"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 645,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                " and apply learnings to improve future campaign planning and execution."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 640,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "bg-gray-800/30 rounded-lg p-4 border border-gray-700",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "text-sm font-semibold text-indigo-400 mb-3",
                                                                                            children: "Audience Reach vs Impression Analysis"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 651,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "rounded-lg overflow-hidden",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: getImagePath('/reachvsimpressionmap.png'),
                                                                                                alt: "Reach vs Impression Performance Mapping",
                                                                                                className: "w-full h-auto object-cover border border-gray-600"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 653,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 652,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-400 mt-2 leading-relaxed",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-indigo-400",
                                                                                                    children: "Audience Engagement Intelligence:"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 660,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " This sophisticated analysis maps the relationship between unique reach and total impressions, revealing crucial insights about ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-indigo-300",
                                                                                                    children: "audience engagement patterns"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 661,
                                                                                                    columnNumber: 84
                                                                                                }, this),
                                                                                                "and optimal frequency strategies. The data helped me identify the sweet spot between reaching new audiences and",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-indigo-300",
                                                                                                    children: "reinforcing my message"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 663,
                                                                                                    columnNumber: 15
                                                                                                }, this),
                                                                                                " to existing prospects. By optimizing this balance, I maximized both ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                    className: "text-indigo-300",
                                                                                                    children: "brand awareness expansion"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                    lineNumber: 664,
                                                                                                    columnNumber: 20
                                                                                                }, this),
                                                                                                " and conversion likelihood while avoiding audience fatigue and wasted ad spend."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 659,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 650,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 554,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-8",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                    className: "text-md font-semibold text-blue-400 mb-3",
                                                                                    children: "Campaign Creatives & Demo Gallery"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 672,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: getImagePath('/campaigndemo1.jpg'),
                                                                                            alt: "Campaign Demo 1",
                                                                                            className: "rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 674,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: getImagePath('/campaigndemo2.jpg'),
                                                                                            alt: "Campaign Demo 2",
                                                                                            className: "rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 675,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                            src: getImagePath('/campaigndemo3.jpg'),
                                                                                            alt: "Campaign Demo 3",
                                                                                            className: "rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 676,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 673,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-gray-400 text-center mt-2",
                                                                                    children: "Selected visuals from my paid social campaigns, demonstrating creative direction and ad execution."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 678,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 671,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-4 bg-gray-800/30 rounded-lg p-4 border border-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                    className: "text-sm font-semibold text-blue-400 mb-3",
                                                                                    children: "Strategic Campaign Management Insights"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 682,
                                                                                    columnNumber: 13
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                        className: "text-green-400",
                                                                                                        children: "Data-Driven Optimization:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                        lineNumber: 685,
                                                                                                        columnNumber: 18
                                                                                                    }, this),
                                                                                                    " Continuously analyzed campaign performance to identify top performers and scale successful strategies"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 685,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 684,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                        className: "text-purple-400",
                                                                                                        children: "Budget Efficiency:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                        lineNumber: 688,
                                                                                                        columnNumber: 18
                                                                                                    }, this),
                                                                                                    " Maintained cost-effective reach and conversion rates while maximizing campaign ROI"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 688,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 687,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                        className: "text-teal-400",
                                                                                                        children: "Performance Benchmarking:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                        lineNumber: 691,
                                                                                                        columnNumber: 18
                                                                                                    }, this),
                                                                                                    " Established clear KPIs and benchmarks to measure success and guide optimization decisions"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 691,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 690,
                                                                                            columnNumber: 14
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                        className: "text-yellow-400",
                                                                                                        children: "Strategic Reallocation:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                        lineNumber: 694,
                                                                                                        columnNumber: 18
                                                                                                    }, this),
                                                                                                    " Identified underperforming campaigns and redistributed budget to high-efficiency initiatives"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 694,
                                                                                                columnNumber: 15
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                                            lineNumber: 693,
                                                                                            columnNumber: 14
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 683,
                                                                                    columnNumber: 13
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 681,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 512,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 506,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 1.0
                                        },
                                        className: "bg-gray-800/50 backdrop-blur-sm rounded-lg border border-yellow-500/30 p-4 md:p-6 mb-6 hover:border-yellow-400/50 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.93V14a1 1 0 11-2 0v-1.07A6.002 6.002 0 014 10a6 6 0 1112 0 6.002 6.002 0 01-5 5.93z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 715,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-lg md:text-xl font-bold text-yellow-400 mb-3",
                                                            children: "Influencer Collaborations & Feedback"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: getImagePath('/influencer.jpg'),
                                                                            alt: "Influencer Feedback 1",
                                                                            className: "rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black mb-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 723,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-400 text-center",
                                                                            children: "Influencer partnership: authentic product review and positive feedback, boosting campaign credibility."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 724,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: getImagePath('/influencer2.jpg'),
                                                                            alt: "Influencer Feedback 2",
                                                                            className: "rounded-lg border border-gray-700 object-contain w-full min-h-[20rem] max-h-[32rem] bg-black mb-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 727,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-400 text-center",
                                                                            children: "Collaboration with a key opinion leader, resulting in increased brand trust and audience engagement."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 728,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 721,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 text-center",
                                                            children: "Real influencer collaborations that contributed to campaign success and social proof for LDWatch."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 711,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 705,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 1.0
                                        },
                                        className: "bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 md:p-6 hover:border-purple-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 746,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 745,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-lg md:text-xl font-bold text-purple-400 mb-3",
                                                            children: "Leadership & Team Management"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm md:text-base text-gray-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-gray-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 755,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "Managed and mentored a ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        className: "text-purple-400",
                                                                                        children: "7-member team"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 756,
                                                                                        columnNumber: 42
                                                                                    }, this),
                                                                                    " responsible for social media content creation, including Facebook and TikTok posts, review videos, and short reels"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 756,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 754,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 759,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Directed outbound customer prospecting efforts and optimized engagement strategies to expand brand reach"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 760,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 758,
                                                                        columnNumber: 12
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex items-start gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 763,
                                                                                columnNumber: 13
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Delivered exceptional service by managing high-value VIP orders and maintaining long-term client relationships"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 764,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                        lineNumber: 762,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 753,
                                                                columnNumber: 11
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 742,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 736,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 383,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 365,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: "education",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.7
                        },
                        className: "w-full max-w-4xl mx-auto mt-12 md:mt-16 px-2 md:px-4 scroll-mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500",
                                children: "Education"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 782,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 md:space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.8
                                        },
                                        className: "bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-blue-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-8 h-6 md:w-10 md:h-8",
                                                        viewBox: "0 0 36 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "36",
                                                                height: "24",
                                                                fill: "#FF0000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "12",
                                                                y: "0",
                                                                width: "12",
                                                                height: "24",
                                                                fill: "#FFFFFF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 799,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M18 4l2 4h-1l-1-2-1 2h-1l2-4zm0 12l-2 4h1l1-2 1 2h1l-2-4z",
                                                                fill: "#FF0000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M16 12l2-2 2 2-2 2-2-2z",
                                                                fill: "#FF0000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg md:text-xl font-bold text-blue-400 mb-1",
                                                            children: "Fanshawe College"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base md:text-lg font-semibold text-white mb-2",
                                                            children: "Post-Graduate Certificate in Artificial Intelligence and Machine Learning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 806,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm md:text-base text-gray-400 mb-3",
                                                            children: "London, Ontario, Canada • 2024 - 2025"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 807,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm md:text-base text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-purple-400 mb-3",
                                                                    children: "Coursework:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1 text-gray-400",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 814,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Deep Learning with TensorFlow/PyTorch"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 813,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 818,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Data Science & Machine Learning"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 817,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 822,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Data Mining & Analysis"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 821,
                                                                                        columnNumber: 14
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 812,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 811,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1 text-gray-400",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 830,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Data Visualization for Machine Learning"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 829,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 834,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Natural Language Processing"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 833,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 838,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Deep Learning with Tensorflow/Keras and Pytorch"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 837,
                                                                                        columnNumber: 14
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 828,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 827,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 810,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 808,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 794,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 788,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.9
                                        },
                                        className: "bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-purple-500/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-8 h-6 md:w-10 md:h-8",
                                                        viewBox: "0 0 36 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "36",
                                                                height: "24",
                                                                fill: "#DA020E"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                points: "18,6 20.5,12.5 27,12.5 22,16.5 24,23 18,19 12,23 14,16.5 9,12.5 15.5,12.5",
                                                                fill: "#FFFF00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg md:text-xl font-bold text-purple-400 mb-1",
                                                            children: "FPT University Vietnam"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 865,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base md:text-lg font-semibold text-white mb-2",
                                                            children: "Bachelor of Software Engineering"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm md:text-base text-gray-400 mb-3",
                                                            children: "Ho Chi Minh City, Vietnam • Aug. 2015 – Aug. 2019"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 867,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm md:text-base text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-teal-400 mb-3",
                                                                    children: "Coursework:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 869,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1 text-gray-400",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 874,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Object-Oriented Programming (OOP)"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 873,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 878,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Java Programming & Database Systems"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 877,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 882,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Data Structures and Algorithms"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 881,
                                                                                        columnNumber: 14
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 872,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 871,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1 text-gray-400",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 890,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Web Development"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 889,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 894,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "C#/ ASP.NET"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 893,
                                                                                        columnNumber: 14
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 bg-teal-500 rounded-full"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                                lineNumber: 898,
                                                                                                columnNumber: 15
                                                                                            }, this),
                                                                                            "Database with RDBMS"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                                                        lineNumber: 897,
                                                                                        columnNumber: 14
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                                                lineNumber: 888,
                                                                                columnNumber: 13
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 887,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 870,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 868,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 864,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 856,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeroSection.tsx",
                                        lineNumber: 850,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 786,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 775,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: "publications",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.0
                        },
                        className: "w-full max-w-4xl mx-auto mt-12 md:mt-16 px-2 md:px-4 scroll-mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500",
                                children: "Publications"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 919,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 1.1
                                },
                                className: "bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-blue-500/30 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-center md:items-start gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://ecampusontario.pressbooks.pub/securemachinelearning/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "block transition-transform hover:scale-105",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-32 h-48 md:w-40 md:h-60 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: getImagePath('/bookcover.png'),
                                                        alt: "Winning the Battle for Secure ML Book Cover",
                                                        className: "w-full h-full object-cover object-center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 939,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeroSection.tsx",
                                                lineNumber: 932,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 931,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 text-center md:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://ecampusontario.pressbooks.pub/securemachinelearning/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "block hover:opacity-80 transition-opacity",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg md:text-xl font-bold text-blue-400 mb-2",
                                                        children: "Winning the Battle for Secure ML"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HeroSection.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 950,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base md:text-lg font-semibold text-white mb-3",
                                                    children: "Open-Access Textbook on Machine Learning Security"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://ecampusontario.pressbooks.pub/securemachinelearning/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block",
                                                    children: "Read more"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm md:text-base text-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-purple-400 mb-3",
                                                            children: "Contributions:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2 text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 972,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "Supported the development of ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                                    children: "Winning the Battle for Secure ML"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                                    lineNumber: 973,
                                                                                    columnNumber: 47
                                                                                }, this),
                                                                                ", an open-access textbook on securing machine learning systems across the ML lifecycle — including adversarial, poisoning, backdoor, and privacy threats."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 973,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 971,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 976,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Helped ensure balanced coverage of both theoretical foundations and hands-on mitigation techniques such as secure-by-design strategies and adversarial ML defenses."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                                            lineNumber: 977,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                                    lineNumber: 975,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HeroSection.tsx",
                                                            lineNumber: 970,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HeroSection.tsx",
                                                    lineNumber: 968,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HeroSection.tsx",
                                            lineNumber: 949,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/HeroSection.tsx",
                                    lineNumber: 929,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 923,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 912,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 135,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HeroSection.tsx",
        lineNumber: 90,
        columnNumber: 3
    }, this);
}
_s(HeroSection, "AoS6/6Aexg153DbK7X5V1Pjq9nI=");
_c = HeroSection;
var _c;
__turbopack_refresh__.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/CertificationsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CertificationsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function CertificationsSection() {
    // Helper function to get the correct image path for GitHub Pages
    const getImagePath = (imagePath)=>{
        // For GitHub Pages deployment, we need to add the repository name as basePath
        // We can detect if we're in production by checking the current location
        if ("TURBOPACK compile-time truthy", 1) {
            // Client-side: check if we're on GitHub Pages
            const isGitHubPages = window.location.hostname === 'lamtdse61743.github.io';
            return isGitHubPages ? `/Portfolio${imagePath}` : imagePath;
        } else {
            "TURBOPACK unreachable";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-3xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500",
                    children: "Certifications"
                }, void 0, false, {
                    fileName: "[project]/app/components/CertificationsSection.tsx",
                    lineNumber: 24,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 md:space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-blue-500/30 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 mt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: getImagePath('/deeplearningai.svg'),
                                                alt: "DeepLearning.AI Logo",
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 46,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CertificationsSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl font-bold text-blue-400 mb-1",
                                                children: "Deep Learning Specialization"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 54,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base md:text-lg font-semibold text-white mb-2",
                                                children: "DeepLearning.AI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 55,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-gray-400 mb-3",
                                                children: "Advanced deep learning concepts including neural networks, CNNs, RNNs, and sequence models"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 56,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://coursera.org/share/45971aee9406b4147b9fba28ec6432a0",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "View Certificate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/CertificationsSection.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 57,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                        lineNumber: 53,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                lineNumber: 42,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/CertificationsSection.tsx",
                            lineNumber: 35,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.2
                            },
                            className: "bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 hover:border-purple-500/30 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 mt-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: getImagePath('/ibm.svg'),
                                                alt: "IBM Logo",
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CertificationsSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl font-bold text-purple-400 mb-1",
                                                children: "Machine Learning with Python"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 92,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base md:text-lg font-semibold text-white mb-2",
                                                children: "IBM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 93,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-gray-400 mb-3",
                                                children: "Comprehensive machine learning course covering algorithms, data preprocessing, and Python implementation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 94,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://coursera.org/share/8132610e93ea8a0ebdb45c720eba15c9",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "View Certificate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/CertificationsSection.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                                lineNumber: 95,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CertificationsSection.tsx",
                                        lineNumber: 91,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CertificationsSection.tsx",
                                lineNumber: 80,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/CertificationsSection.tsx",
                            lineNumber: 73,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/CertificationsSection.tsx",
                    lineNumber: 33,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/CertificationsSection.tsx",
            lineNumber: 23,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/CertificationsSection.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
}
_c = CertificationsSection;
var _c;
__turbopack_refresh__.register(_c, "CertificationsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ContactSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ContactSection)
});
'use client';
function ContactSection() {
    return null; // This section is now integrated into the HeroSection
}
_c = ContactSection;
var _c;
__turbopack_refresh__.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>FullStackPortfolio)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CertificationsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/CertificationsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ContactSection.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function FullStackPortfolio() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-gray-950 to-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CertificationsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 13,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
}
_c = FullStackPortfolio;
var _c;
__turbopack_refresh__.register(_c, "FullStackPortfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_97a6d6._.js.map