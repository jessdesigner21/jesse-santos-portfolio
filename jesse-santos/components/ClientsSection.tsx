import Image from "next/image";
import Link from "next/link";
import { agency, clients, type Client } from "@/data/clients";

const sectors = [
  "Energia, mineração e indústria",
  "Agro e equipamentos",
  "Saúde e bem-estar",
  "Iluminação e tecnologia",
  "Comunidade e campanhas",
];

export default function ClientsSection() {
  const agencyClients = clients.filter((client) => client.agency);
  const otherClients = clients.filter((client) => !client.agency);

  return (
    <section className="px-5 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[1376px]">
        <div className="clients-agency">
          <div>
            <p className="editorial-num text-[#655b4c]">Agência onde trabalho</p>
            <h2 className="archive-work-title mt-2">{agency.name}</h2>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <a href={agency.website} target="_blank" rel="noreferrer" className="marker-underline">Site ↗</a>
              <a href={agency.instagram} target="_blank" rel="noreferrer" className="marker-underline">Instagram ↗</a>
            </div>
          </div>
          <Image src={agency.logo} width={295} height={52} alt="" className="h-auto w-full max-w-[15rem]" />
        </div>

        <h2 className="archive-work-title mt-12 md:mt-16">Marcas atendidas no Chile</h2>
        {sectors.map((sector) => (
          <div key={sector} className="clients-sector">
            <h3 className="archive-work-title">{sector}</h3>
            <ClientList entries={agencyClients.filter((client) => client.industry === sector)} />
          </div>
        ))}

        <div className="clients-sector">
          <h2 className="archive-work-title">Outras marcas e projetos</h2>
          <ClientList entries={otherClients} />
        </div>
      </div>
    </section>
  );
}

function ClientList({ entries }: { entries: Client[] }) {
  return (
    <ul className="clients-list">
      {entries.map((client) => {
        const href = client.workHref ?? (client.projectSlugs[0] ? `/work/${client.projectSlugs[0]}` : undefined);
        const content = (
          <>
            {client.logo && (
              <span className={`clients-logo ${client.darkLogo ? "clients-logo-dark" : ""}`}>
                <Image src={client.logo} alt="" fill sizes="(max-width: 896px) 38vw, 17vw" />
              </span>
            )}
            <span className="clients-entry-label">
              <span>
                <span className="font-grotesk text-base font-medium leading-tight md:text-lg">{client.name}</span>
                {client.services.length > 0 && (
                  <span className="mt-1 block text-sm text-[#655b4c]">{client.services.join(" · ")}</span>
                )}
              </span>
              {href && <span aria-hidden="true">↗</span>}
            </span>
          </>
        );

        return (
          <li key={client.name}>
            {href ? (
              <Link href={href} className="clients-entry clients-entry-link">{content}</Link>
            ) : (
              <div className="clients-entry">{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
