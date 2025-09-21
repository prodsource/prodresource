import { Quote } from "lucide-react";

export function QuoteSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-primary mx-auto mb-8 opacity-60" />
          
          <blockquote className="text-2xl md:text-4xl font-light text-foreground leading-relaxed mb-8">
            "People begin to become successful the minute they decide to be."
          </blockquote>
          <cite className="text-lg text-muted-foreground font-medium">— Harvey Mackay</cite>
          
          <div className="mt-12 p-8 bg-card rounded-2xl shadow-card border">
            <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-4">
              கல்வியின் உயர்ந்த நோக்கம் அறிவு அல்ல செயல்
            </p>
            <p className="text-muted-foreground italic">
              "Nothing more Nothing Less Simply Game Over "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
