import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

export async function GET(request: Request) {
    const guestName =
        new URL(request.url).searchParams.get("guest")?.trim().slice(0, 80) ||
        "Dear Friend";

    return new ImageResponse(
        <div
            style={{
                position: "relative",
                display: "flex",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                color: "#0d2238",
                background: "#fbf8f1",
                fontFamily: "serif",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    bottom: 24,
                    left: 24,
                    display: "flex",
                    border: "2px solid #bd9555",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 34,
                    right: 34,
                    bottom: 34,
                    left: 34,
                    display: "flex",
                    border: "1px solid rgba(13,34,56,0.2)",
                }}
            />

            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    padding: "64px 78px",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: 430,
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingRight: 54,
                        borderRight: "1px solid rgba(189,149,85,0.55)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            color: "#bd9555",
                            fontFamily: "sans-serif",
                            fontSize: 21,
                            fontWeight: 700,
                            letterSpacing: 6,
                        }}
                    >
                        CLASS OF 2026
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 18,
                            fontSize: 76,
                            lineHeight: 0.94,
                            letterSpacing: -3,
                        }}
                    >
                        Graduation
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 8,
                            color: "#bd9555",
                            fontSize: 52,
                            fontStyle: "italic",
                        }}
                    >
                        day
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 38,
                            color: "#5f6871",
                            fontFamily: "sans-serif",
                            fontSize: 20,
                            letterSpacing: 2,
                        }}
                    >
                        10:30 AM · 06.08.2026
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: 62,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            color: "#bd9555",
                            fontFamily: "sans-serif",
                            fontSize: 20,
                            fontWeight: 700,
                            letterSpacing: 5,
                        }}
                    >
                        DEAR
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 16,
                            color: "#0d2238",
                            fontSize: guestName.length > 25 ? 50 : 64,
                            lineHeight: 1.08,
                        }}
                    >
                        {guestName}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: 80,
                            height: 3,
                            marginTop: 28,
                            background: "#bd9555",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            marginTop: 28,
                            color: "#53616d",
                            fontFamily: "sans-serif",
                            fontSize: 22,
                            lineHeight: 1.55,
                        }}
                    >
                        You are cordially invited to celebrate the Graduation Day of
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 10,
                            color: "#0d2238",
                            fontFamily: "sans-serif",
                            fontSize: 28,
                            fontWeight: 700,
                            letterSpacing: 1,
                        }}
                    >
                        MẠCH LÂM QUỐC HOÀI
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 12,
                            color: "#bd9555",
                            fontFamily: "sans-serif",
                            fontSize: 18,
                            fontWeight: 700,
                            letterSpacing: 3,
                        }}
                    >
                        VAN LANG UNIVERSITY
                    </div>
                </div>
            </div>
        </div>,
        {
            ...size,
            headers: {
                "Cache-Control": "public, max-age=3600, s-maxage=86400",
            },
        },
    );
}
