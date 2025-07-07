import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function Default(): JSX.Element {
  return (
    <Card className="w-[373px] h-[443px] bg-zinc-950 rounded-[10px] overflow-hidden border-zinc-800">
      <div className="h-[250px] w-full">
        <div
          className="w-full h-full bg-[url(/jcbauigqhmddarswthnhsddjwu4-jpg.png)] bg-cover bg-center"
          aria-hidden="true"
        />
      </div>

      <CardContent className="flex flex-col p-0">
        <div className="flex flex-col gap-[9.4px] p-[25px] pt-[15px] pb-[5px]">
          <h2 className="font-sensible-effect-067359-framer-app-semantic-heading-6 font-[number:var(--sensible-effect-067359-framer-app-semantic-heading-6-font-weight)] text-neutral-50 text-[length:var(--sensible-effect-067359-framer-app-semantic-heading-6-font-size)] tracking-[var(--sensible-effect-067359-framer-app-semantic-heading-6-letter-spacing)] leading-[var(--sensible-effect-067359-framer-app-semantic-heading-6-line-height)]">
            Premium Assets
          </h2>

          <p className="font-sensible-effect-067359-framer-app-inter-regular font-[number:var(--sensible-effect-067359-framer-app-inter-regular-font-weight)] text-zinc-500 text-[length:var(--sensible-effect-067359-framer-app-inter-regular-font-size)] tracking-[var(--sensible-effect-067359-framer-app-inter-regular-letter-spacing)] leading-[var(--sensible-effect-067359-framer-app-inter-regular-line-height)]">
            Every component in Pixkit is meticulously <br />
            crafted for user interaction.
          </p>
        </div>

        <div className="p-[25px] pt-0">
          <Button
            className="h-[30px] bg-[#ffb66e] hover:bg-[#ffb66e]/90 rounded-[10px] px-3 py-[6.8px]"
            aria-label="Learn more about Premium Assets"
          >
            <span className="font-sensible-effect-067359-framer-app-semantic-link font-[number:var(--sensible-effect-067359-framer-app-semantic-link-font-weight)] text-white text-[length:var(--sensible-effect-067359-framer-app-semantic-link-font-size)] tracking-[var(--sensible-effect-067359-framer-app-semantic-link-letter-spacing)] leading-[var(--sensible-effect-067359-framer-app-semantic-link-line-height)]">
              Learn more
            </span>
            <ChevronRight className="ml-1 h-3 w-3 text-white" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
