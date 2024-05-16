
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../../components/ui/collapsible"
import FooterN from "../../components/FooterN"
export function FAQ() {
  return (
    (
    <>
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger
                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300">
                What is the refund policy?
                <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent
                className="rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
                We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase,
                you can request a full refund within 30 days of your order.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger
                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300">
                How do I contact customer support?
                <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent
                className="rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
                You can reach our customer support team by email at support@example.com or by phone at 1-800-123-4567.
                Our support team is available Monday through Friday, 9am to 5pm EST.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger
                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300">
                What payment methods do you accept?
                <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent
                className="rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also
                accept PayPal and Apple Pay.
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger
                className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300">
                How long does shipping take?
                <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent
                className="rounded-md border border-gray-200 bg-white px-4 py-3 text-left text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
                We offer standard shipping that typically takes 5-7 business days for delivery. We also offer expedited
                shipping options for an additional fee.
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
    <FooterN/>
    </>)
  );
}

function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}
