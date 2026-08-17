/**
 * Helper para aplicar a cor de acento de um projeto na variável CSS global
 * --project-accent. Usado por seções que "contaminam" a UI com a cor do
 * trabalho em foco (ver PRD: "o portfólio deve permitir que o trabalho
 * contamine o site").
 */
export function setAccent(color: string | null) {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty(
    "--project-accent",
    color ?? "#2D6BFF"
  );
}
