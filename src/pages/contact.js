import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import mainStyle from "../styles/main.module.scss"
import contactStyle from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    faTwitter,
    faGithub,
    faDev,
    faLinkedin,
    faMedium,
} from "@fortawesome/free-brands-svg-icons"

const ContactPage = (props) => {
    return (
        <Layout>
            <Head title="Contact"  path={props.path} />

            <p>
                My preferred way of contact is via&nbsp;
                <a
                    href="https://twitter.com/iamsaeed_dev"
                    class={mainStyle.link}
                >
                    Twitter <FontAwesomeIcon icon={faTwitter} />
                </a>
                &nbsp;or&nbsp;
                <a
                    className={mainStyle.link}
                    href="mailto:saeed_dev@yahoo.com"
                    alt="Mail to saeed_dev@yahoo.com"
                >
                    E-mail&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;
                </a>. Feel free to check out my social media presence below to get to know me better.
            </p>
            <div className={contactStyle.icons}>
                <a
                    href="https://twitter.com/iamsaeed_dev"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                    href="https://github.com/dev-saeed"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://dev.to/saeeddev" class={contactStyle.iconLink}>
                    <FontAwesomeIcon icon={faDev} />
                </a>

                <a href="https://medium.com/@saeeddev" class={contactStyle.iconLink}>
                    <FontAwesomeIcon icon={faMedium} />
                </a>

                <a
                    href="https://www.linkedin.com/in/saeeddev/"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </Layout>
    )
}

export default ContactPage