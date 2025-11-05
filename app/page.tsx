import { allArticles } from "content-collections";
import Link from "next/link";
import Image from "next/image";
import { AboutSection } from "@/components/AboutSection";
import { PrivacyPolicySection } from "@/components/PrivacyPolicySection";
import { ThirdPartyLink } from "@/components/ThirdPartyLink";

export default function Home() {
  const builds = allArticles
    .filter((article) => article.article_type === "build")
    .sort((a, b) => a.title.localeCompare(b.title));
  const guides = allArticles
    .filter((article) => article.article_type === "guide")
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <div className="relative w-full h-[245px]">
        <Image
          src="/images/ONI_wallpaper.jpg"
          alt="Oxygen Not Included wallpaper"
          fill
          unoptimized
          className="object-fit"
        />
        <div className="absolute inset-0 grid grid-cols-2">
          <div></div>
          <div className="flex items-center justify-center p-8">
            <div className="text-white space-y-4">
              <p>
                Do you know what you want to build but can&apos;t remember what
                bits go where or what the sensor settings were supposed to be?
                Check the builds section.
              </p>
              <p>
                Do your dupes keep simultaneously starving, suffocating and
                peeing themselves? Have a look at The Complete Beginner&apos;s
                Completely Incomplete Guide to Oxygen Not Included.
              </p>
              <p>
                Were you actually looking for some other Oxygen Not Included
                resource or website? Check the useful sites section.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section id="builds" className="mt-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="h2">Builds</h2>
            <p>(What can I say - I have watched a lot of Francis John.)</p>
            <ul>
              {builds.map((article) => (
                <li key={article.slug} className="leading-[1.4]">
                  <Link
                    href={`/${article.slug}`}
                    className="underline uppercase font-[500]"
                    style={{
                      fontFamily: "var(--font-oswald), oswald, sans-serif",
                    }}
                  >
                    {article.title}
                  </Link>
                  {article.subtitle && <p>{article.subtitle}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/images/RubyBase_2.png"
              alt="Ruby Base build example"
              width={1160}
              height={1208}
              unoptimized
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="guides">
        <h2>Guides</h2>
        <ul>
          {guides.map((article) => (
            <li
              key={article.slug}
              className="text-[18px] font-[200] leading-[1.4]"
              style={{ fontFamily: "var(--font-oswald), oswald, sans-serif" }}
            >
              <Link href={`/${article.slug}`} className="underline">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="useful-sites">
        <h2>Useful Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ThirdPartyLink
            title="THE WIKI"
            subtitle={
              <a
                href="https://oxygennotincluded.wiki.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://oxygennotincluded.wiki.gg/
              </a>
            }
            description="The wiki has information about dupes, resources, critters, geysers, asteroids, and pretty much everything else you can find in the game."
          />

          <ThirdPartyLink
            title="PROFESSOR OAKSHELL'S LAB"
            subtitle={
              <a
                href="https://zari.rtk0.net/ProfessorOakshell/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://zari.rtk0.net/ProfessorOakshell/index.html
              </a>
            }
            description="Includes a bunch of useful calculators, including food, farming, heat and rockets."
          />

          <ThirdPartyLink
            title="TOOLS NOT INCLUDED"
            subtitle={
              <a
                href="https://toolsnotincluded.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://toolsnotincluded.net
              </a>
            }
            description="Tools Not Included lets you browse maps to help you find one with exactly the kinds of geysers and planets you're looking for. Sadly, the site has been down for a while but there is hope it will be back."
          />

          <ThirdPartyLink
            title="ONI ASSISTANT"
            subtitle={
              <a
                href="https://oni-assistant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://oni-assistant.com
              </a>
            }
            description="The Oni Assistant website has lots of useful tools, including a food calculator and a calculator to figure out how much fuel you will need for your rocket (in the base game)."
          />

          <ThirdPartyLink
            title="THE DEVELOPER'S FORUMS"
            subtitle={
              <a
                href="https://forums.kleientertainment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://forums.kleientertainment.com
              </a>
            }
            description="On Klei's forums you can read about updates to the game, learn about mods, submit a suggestion or a bug report, and more."
          />

          <ThirdPartyLink
            title="REDDIT"
            subtitle={
              <a
                href="https://www.reddit.com/r/Oxygennotincluded"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.reddit.com/r/Oxygennotincluded
              </a>
            }
            description="Reddit's Oxygen Not Included subforum is a good place to talk about the game, see builds, or ask questions about your own."
          />

          <ThirdPartyLink
            title="DISCORD"
            subtitle={
              <a
                href="https://discord.gg/EBncbX2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://discord.gg/EBncbX2
              </a>
            }
            description="The Oxygen Not Included discord has announcements, information about game updates, discussions and more."
          />

          <ThirdPartyLink
            title="YOUTUBE"
            subtitle="Various channels. Some also include tutorials."
            description="Some examples: Anarod, Blitz After Dark, Brothgar, Cryptic Fox, Echo Ridge Gaming, Francis John, GCFungus, Grind This Game, Luma plays, Magnet, Mullematsch, Nathan's Sandbox, Nilaus, QuantumZari, Skye Storme and Toni Advanced (as well as Josh's ONI antics at Let's Game it Out)"
          />

          <ThirdPartyLink
            title="STEAM GUIDES"
            subtitle={
              <a
                href="https://steamcommunity.com/app/457140/guides/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                steamcommunity.com/app/457140/guides/
              </a>
            }
            description="There are lots of great guides on Steam, written by gamers and covering pretty much anything you might want to learn. A special mention goes to the Compendium of Amazing Designs by Kharnath."
          />

          <ThirdPartyLink
            title="BLUEPRINT NOT INCLUDED"
            subtitle={
              <a
                href="https://blueprintnotincluded.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://blueprintnotincluded.org/
              </a>
            }
            description="A site for creating and sharing blueprints."
          />

          <ThirdPartyLink
            title="DUPLICITY"
            subtitle={
              <a
                href="https://robophred.github.io/oni-duplicity/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://robophred.github.io/oni-duplicity/#/
              </a>
            }
            description="An ONI save file editor."
          />
        </div>
      </section>

      <AboutSection />

      <PrivacyPolicySection />
    </div>
  );
}
