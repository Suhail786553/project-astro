import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as createAstro } from '../astro_BQQJxewY.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { dog: "clifford" } },
    { params: { dog: "rover" } },
    { params: { dog: "spot" } }
  ];
}
const $$dog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$dog;
  const { dog } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div>Good dog, ${dog}!</div>`;
}, "D:/Astro/website/src/pages/dog/[dog].astro", void 0);

const $$file = "D:/Astro/website/src/pages/dog/[dog].astro";
const $$url = "/dog/[dog]";

export { $$dog as default, $$file as file, getStaticPaths, $$url as url };
