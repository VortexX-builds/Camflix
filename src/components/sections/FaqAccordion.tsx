import React, { useState } from 'react';
import Button from '../ui/Button';
import EmailInput from '../ui/EmailInput';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Camflix?",
    answer: "Camflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price."
  },
  {
    question: "How much does it cost?",
    answer: "Watch Camflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month. No extra costs, no contracts."
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Camflix account to watch instantly on the web at camflix.com from your personal computer or on any internet-connected device that offers the Camflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
  },
  {
    question: "How do I cancel?",
    answer: "Camflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I watch on Camflix?",
    answer: "Camflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Camflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    question: "Is Camflix good for kids?",
    answer: "The Camflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-black text-white border-b-8 border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-2 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-700 transition"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl md:text-2xl font-semibold">{faq.question}</span>
                <span className="text-4xl font-light">
                  {openIndex === index ? '×' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 border-t border-black text-lg md:text-xl">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg md:text-xl mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <EmailInput 
              className="flex-grow"
              placeholder="Email address"
            />
            <Button size="lg" type="submit" className="whitespace-nowrap flex items-center gap-2">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
