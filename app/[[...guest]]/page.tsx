import type { Metadata } from "next";
import Image from "next/image";

const DEFAULT_GUEST = "Friend";

type PageProps = {
    params: Promise<{ guest?: string[] }>;
};

function guestNameFromSegments(segments?: string[]) {
    const rawName = (segments ?? [])
        .map((segment) => {
            try {
                return decodeURIComponent(segment);
            } catch {
                return segment;
            }
        })
        .join(" ")
        .replace(/\+/g, " ");

    return rawName.trim() || DEFAULT_GUEST;
}

function guestPath(segments?: string[]) {
    if (!segments?.length) return "/";
    return `/${segments.map(encodeURIComponent).join("/")}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { guest } = await params;
    const guestName = guestNameFromSegments(guest);
    const personalized = guestName !== DEFAULT_GUEST;
    const title = personalized
        ? `Graduation invitation for ${guestName}`
        : "Graduation Invitation | Mạch Lâm Quốc Hoài";
    const description = personalized
        ? `${guestName}, you are cordially invited to celebrate the Graduation Day of Mạch Lâm Quốc Hoài.`
        : "You are cordially invited to celebrate the Graduation Day of Mạch Lâm Quốc Hoài.";
    const previewImage = `/og?guest=${encodeURIComponent(guestName)}`;

    return {
        title,
        description,
        alternates: { canonical: guestPath(guest) },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: guestPath(guest),
            siteName: "Graduation Invitation",
            title,
            description,
            images: [
                {
                    url: previewImage,
                    width: 1200,
                    height: 630,
                    alt: `Graduation invitation for ${guestName}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [previewImage],
        },
    };
}

export default async function InvitationPage({ params }: PageProps) {
    const { guest } = await params;
    const guestName = guestNameFromSegments(guest);

    return (
        <main className="invitation-shell">
            <article className="invitation-card" aria-label="Graduation Invitation Card">
                <div className="corner corner-top-left" aria-hidden="true" />
                <div className="corner corner-top-right" aria-hidden="true" />
                <div className="corner corner-bottom-left" aria-hidden="true" />
                <div className="corner corner-bottom-right" aria-hidden="true" />

                <header className="invitation-header">
                    <p className="eyebrow">SAVE THE DATE</p>
                    <div className="mt-6">
                        <h1>
                            <span className="">
                                <span className="relative inline-block">
                                    <Image
                                        src="/graduation_cap.png"
                                        alt="Graduation cap"
                                        width={3000}
                                        height={3000}
                                        className="absolute -top-[0.6em] -left-[0.32em] w-[1.1em] h-auto -rotate-4 pointer-events-none z-10 max-w-none"
                                    />
                                    G
                                </span>
                                raduation
                            </span>
                            <span className="day-text">day</span>
                        </h1>
                    </div>
                    <p className="class-year">CLASS OF 2026</p>
                </header>

                <div className="ornament" aria-hidden="true">
                    <span />
                    <i>✦</i>
                    <span />
                </div>

                <section className="invitation-copy">
                    <p className="warm-greeting">DEAR</p>
                    <p className="guest-name">{guestName}</p>
                    <p className="message">
                        I would be delighted to have you join me in celebrating and creating memorable moments on my Graduation Day.
                    </p>
                </section>

                <section className="graduate" aria-label="Graduate Details">
                    <p>CORDIALLY INVITED TO THE GRADUATION OF</p>
                    <h2>Mạch Lâm Quốc Hoài</h2>
                    <p className="school">VAN LANG UNIVERSITY</p>
                </section>

                <section className="event-details" aria-label="Date and Venue Details">
                    <div className="date-block">
                        <p>THURSDAY</p>
                        <strong>06</strong>
                        <p>AUGUST · 2026</p>
                    </div>
                    <div className="detail-divider" aria-hidden="true" />
                    <div className="venue-block">
                        <p className="time">10:30 AM</p>
                        <p>Quảng trường Đông Sơn (Phía sau tòa J)</p>
                        <address>
                            69/68 Dang Thuy Tram Street,
                            <br />
                            Binh Thanh District, Ho Chi Minh City
                        </address>
                    </div>
                </section>

                <footer>
                    <p>Looking forward to seeing you on this special day!</p>
                    <div className="signature" aria-hidden="true">
                        Hoai
                    </div>
                </footer>
            </article>
        </main>
    );
}
