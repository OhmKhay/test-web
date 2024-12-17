import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do I apply to college?",
    answer: `You can apply online through our email, social media accounts (Tiktok (Shan Community College), Facebook (SCC students Affair or Kaw Dai Organization), and you can phone us +95 9447040121`,
    value: "item-1",
  },
  {
    question: "တေလႆႈႁဵတ်းႁိုဝ်ယိုၼ်ႈၶဝ်ႈႁဵၼ်းလႆႈ တီႈၸၼ်ႉၸွမ်တူင်ႇၵူၼ်းတႆး",
    answer:  `သူၸဝ်ႈၵပ်းသိုပ်ႇတွင်ႈထၢမ်မႃးလႆႈ တီႈၼႂ်းဢီးမေးလ် ဢမ်ႇၼၼ် တီႈ Facebook (Kaw Dai Organization), Tiktok (Shan Community College) ဢမ်ႇၼၼ်သိုပ်ႇၾူၼ်းလႆႈတီႈမၢႆ +95 9447040121`,
    value: "item-2",
  },
  {
    question: `When are the applications deadlines?`,
    answer: "Our college accepts applications twice a year in February and August.",
    value: "item-3",
  },
  {
    question: `ၸၼ်ႉၸွမ်တူင်ႇၵူၼ်းတႆး ႁပ်ႉလုၵ်ႈႁဵၼ်းမိူဝ်ႈလႂ်`,
    answer: "ႁဝ်းၶႃႈ ႁပ်ႉလုၵ်ႈႁဵၼ်း ၼိူင်ႈပီႊသွင်ပွၵ်ႈ ၼႂ်းလိူၼ် ထူၼ်ႈသွင် လႄႈ လိူၼ်ထူၼ်ႈပႅတ်ႇ (February, August)",
    value: "item-3",
  },
  {
    question: `What documents do I need to submit with my application`,
    answer: "Student must be 16 years old above, have finished high school from any private school or government school, passed entrance examination, have high school certificate, identification card, Guardian",
    value: "item-4",
  },
  {
    question:
      "တႃႇတေၶဝ်ႈႁဵၼ်းတီႈၸၼ်ႉၸွမ်တူင်ႇၵူၼ်းတႆး လူဝ်ႇသင်လၢႆလၢႆ",
    answer:
      "သင်ဝႃႈတေၶဝ်ႈႁဵၼ်းတီႈၸၼ်ႉၸွမ်ၸိုင် ဢႃႇယူႉတေလႆႈတဵမ် သိပ်းႁူၵ်း ၊ တေလႆႈယဝ်ႉႁူင်းႁဵၼ်းၸၼ်ႉသုင် ၊ တေလႆႈပူၼ်ႉပၢင်တွပ်ႇလိၵ်ႈၶဝ်ႈႁဵၼ်းၸၼ်ႉၸွမ်၊ တေလႆႈမီးဝႂ်ဢွင်ႇပူၼ်ႉၸၼ်ႉသုင် ၊ ဝႂ်ၾၢင်တူဝ် ၊ တေလႆႈမီးၽူႈဢဝ်ပုၼ်ႈၽွၼ်း",
    value: "item-5",
  },
  // What is the tuition cost?
  {
    question:
      "What is the tuition cost?",
    answer:
      "Tuition costs vary by program and residency status. You can contact us by phone to get more details.",
    value: "item-6",
  },
  {
    question:
      "ၵႃႊႁဵၼ်းသဵင်ႈၵႃႊႁိုဝ်",
    answer:
      "ပီႊၼိူင်ႈလႄႈပီႊၼိူင်ႈ ၊ ပွင်ႈႁဵၼ်းၼိူင်ႈလႄႈပွင်ႈႁဵၼ်းၼိူင်ႈ တေဢမ်ႇမိူၼ်ၵၼ် ယွၼ်ႉၼၼ် သင်ဝႃႈၶႂ်ႈႁူႉႁူဝ်ယွၺ်ႈမၼ်းၸိုင် ၵပ်းသိုပ်ႇတွင်ႈထၢမ်ၾၢႆႇႁပ်ႉလုၵ်ႈႁဵၼ်းၵေႃႈလႆႈယူႇၶႃႈ",
    value: "item-7",
  },
  {
    question:
      "Are there scholarships available?",
    answer:
      "Ye, we offer a variety of scholarships. Email or phone to those who are responsible.",
    value: "item-8",
  },
  {
    question:
      "ၸွင်ႇမီးသူးၵၢၼ်ႁဵၼ်း",
    answer:
      "တီႈၸၼ်ႉၸွမ်တူင်ႇၵူၼ်းတႆးႁဝ်းၶႃႈ သင်ဝႃႈလုၵ်ႈႁဵၼ်းၵေႃႉလႂ် မီးၸႂ်ၶႂ်ႈႁဵတ်းသၢင်ႈပုၼ်ႈတႃႇတူင်ႇၵူၼ်းၶိုၼ်ႈယႂ်ႇ မီးၼမ်ႉၸႂ်ၶႂ်ႈႁဵတ်းပုၼ်ႈတႃႇ ၵူၼ်းတင်းၼမ်ၼႆၸိုင် မီးသူးၵၢၼ်ႁဵၼ်းယူႇ သင်ၶႂ်ႈႁူႉႁူဝ်ယွၺ်ႈမၼ်းၸိုင် ၵပ်းသိုပ်ႇတွင်ႈထၢမ်လႆႈၽူႈမီးပုၼ်ႈၽွၼ်းလႆႈယူႇ။",
    value: "item-9",
  },


];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Frequently Asked{" "}
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="mt-4 font-medium">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="transition-all text-primary border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
