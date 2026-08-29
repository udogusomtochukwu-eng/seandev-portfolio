import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { EMAIL } from "./site.js";

/**
 * Central social/contact registry — replace the placeholder URLs with
 * the real profiles when ready. Consumed by SocialLinks (Hero, Contact
 * and Footer), so nothing here is duplicated.
 *
 * The Hero passes ids ["github", "x", "linkedin"]; Contact and Footer
 * also include "email".
 */
export const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    ariaLabel: "SeanDev on GitHub",
    href: "https://github.com/udogusomtochukwu-eng",
    Icon: FaGithub,
  },
  {
    id: "x",
    label: "X (formerly Twitter)",
    ariaLabel: "SeanDev on X (formerly Twitter)",
    href: "https://x.com/SeanDev_1", // TODO: real profile URL
    Icon: FaXTwitter,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    ariaLabel: "SeanDev on LinkedIn",
    href: "https://www.linkedin.com/in/somtochukwu-udogu-8a081442a", // TODO: real profile URL
    Icon: FaLinkedinIn,
  },
  {
    id: "email",
    label: "Email",
    ariaLabel: "Email Sean",
    href: `mailto:${EMAIL}`,
    Icon: Mail,
  },
];
