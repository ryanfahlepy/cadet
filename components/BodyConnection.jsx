
import Head from 'next/head'

const BodyConnection = () => {
    const divStyle = {
        backgroundImage: `url('/images/bg_connection.png')`,
        /* Atur ukuran dan posisi latar belakang sesuai kebutuhan */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
            <Head>
                <>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta charSet="utf-8" />
                    <meta name="keywords" content="" />
                    <meta name="description" content="" />
                    <title>Home</title>
                    <link rel="stylesheet" href="nicepage.css" media="screen" />
                    <link rel="stylesheet" href="Home.css" media="screen" />
                    <meta name="generator" content="Nicepage 5.9.10, nicepage.com" />
                    <link
                        id="u-theme-google-font"
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
                    />
                    <link
                        id="u-page-google-font"
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Lobster:400"
                    />
                    <meta name="theme-color" content="#478ac9" />
                    <meta property="og:title" content="Home" />
                    <meta property="og:type" content="website" />
                    <meta data-intl-tel-input-cdn-path="intlTelInput/" />
                </>

            </Head>

            <section
                style={divStyle}
                className="u-align-center u-clearfix u-container-align-center u-image u-shading u-section-1"
                data-image-width={1920}
                data-image-height={1080}
                id="sec-7a8a"
            >

                <div className="u-clearfix u-sheet u-sheet-1">
                    <img

                        className="u-align-center u-image u-image-contain u-image-default u-image-1"
                        src="images/Text3Medium.png"
                        alt=""
                        data-image-width={1365}
                        data-image-height={768}
                    />
                    <h4 className="u-custom-font u-font-lobster u-text u-text-default u-text-1">
                        <a
                            className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-3-dark-3 u-btn-1"
                            href="http://wa.me/+6285161503047"
                            rel='noreferrer'
                            target="_blank"
                        >
                            Contact Person :<br />
                            Sergeant Cadet Ryan Fahlepy (click here)
                        </a>
                    </h4>
                    <div className=' text-black'>
                        <h6><br />
                            - Please wait until form appears -
                        </h6>
                    </div>
                    <div className="u-clearfix u-custom-html u-expanded-width u-custom-html-1">
                        <div className='flex justify-center'>
                            <img src='images/invitation_connection.png'></img>
                        </div>
                        <iframe
                            frameBorder={0}
                            style={{ height: 700, width: "100%", border: "none" }}
                            src="https://forms.zohopublic.com/jinjitshu/form/CONNECTION/formperma/G6CtSgJpfcMfsnWYNXIJ5MiB2vOZ3GpZcmZ67dBNetk"
                        />
                    </div>
                </div>
            </section>

        </>

    );
};

export default BodyConnection;
