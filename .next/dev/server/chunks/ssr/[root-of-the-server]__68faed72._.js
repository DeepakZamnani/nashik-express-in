module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Deepak/nashik-express/frontend/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Deepak/nashik-express/frontend/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Deepak/nashik-express/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Deepak/nashik-express/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Deepak/nashik-express/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Deepak/nashik-express/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
const API_URL = 'http://localhost:5000/api';
async function getArticle(slug) {
    try {
        const res = await fetch(`${API_URL}/articles/slug/${slug}`, {
            cache: 'no-store'
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}
async function ArticlePage({ params }) {
    const article = await getArticle(params.slug);
    if (!article) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                style: {
                    color: '#0066cc',
                    marginBottom: '20px',
                    display: 'inline-block'
                },
                children: "← Back to home"
            }, void 0, false, {
                fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '32px',
                            marginBottom: '10px'
                        },
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#666',
                            fontSize: '14px',
                            marginBottom: '20px',
                            paddingBottom: '20px',
                            borderBottom: '2px solid #eee'
                        },
                        children: [
                            article.category_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginRight: '15px'
                                },
                                children: [
                                    "📁 ",
                                    article.category_name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "👁️ ",
                                    article.views,
                                    " views"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: '15px'
                                },
                                children: [
                                    "📅 ",
                                    new Date(article.published_at).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            article.author_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: '15px'
                                },
                                children: [
                                    "✍️ ",
                                    article.author_name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    article.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '18px',
                            fontStyle: 'italic',
                            color: '#555',
                            marginBottom: '30px'
                        },
                        children: article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            lineHeight: '1.8',
                            fontSize: '16px',
                            whiteSpace: 'pre-wrap'
                        },
                        children: article.content
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '40px',
                    paddingTop: '20px',
                    borderTop: '1px solid #ddd'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Deepak$2f$nashik$2d$express$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        color: '#0066cc'
                    },
                    children: "← Back to all articles"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Deepak/nashik-express/frontend/app/articles/[slug]/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__68faed72._.js.map