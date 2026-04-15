// Blog posts. Content is HTML — rendered via dangerouslySetInnerHTML inside a .prose-blog wrapper.

export const posts = [
  {
    slug: "ebitda-quick-wins-before-exit",
    title: "5 Finance Quick Wins That Boost EBITDA Before Exit",
    metaDescription:
      "Five practical finance moves PE sponsors and portco CFOs can execute in 60–120 days to lift defensible EBITDA before a process — without cosmetic adjustments buyers will haircut.",
    date: "2026-04-02",
    readTime: "9 min read",
    category: "PE Advisory",
    excerpt:
      "The EBITDA you walk into a process with is not the EBITDA you end up defending. Here are five moves — revenue recognition, expense reclassification, working capital normalization, add-back documentation, and run-rate methodology — that materially shift the enterprise value bridge without inviting a quality-of-earnings haircut.",
    content: `
<p class="lead">The EBITDA you present in a confidential information memorandum is not the EBITDA that survives diligence. Every sponsor who has run more than a handful of processes knows this. The gap between reported, adjusted, and pro forma EBITDA is where value is won or lost — and it is almost always a function of how well the finance function anticipated buyer scrutiny.</p>

<p>What follows is a playbook we use when we have roughly 60 to 180 days before a process begins. These are not cosmetic adjustments. Each of them is defensible in front of a competent quality-of-earnings provider, and each of them materially shifts the enterprise value bridge when executed properly.</p>

<h2>1. Revenue recognition cleanup — and why recurring revenue quality matters more than growth</h2>

<p>Before you optimize anything, reconcile what you actually have. In most mid-market companies we work with, revenue is booked on a blend of policies that accrued over time: cash-basis remnants from early-stage accounting, invoice-date recognition for services that should be ratable, and one-time implementation fees commingled with subscription revenue. None of this is fraud. All of it will show up in a QoE report as a risk.</p>

<p>The single most impactful move is to separate recurring from non-recurring revenue at the ledger level, not just in a footnote. Buyers pay a multiple on recurring revenue that is two to three times the multiple on project or one-time revenue. If $4M of what you are calling ARR is actually implementation fees, professional services, or variable consumption overages, you are leaving a material amount of enterprise value on the table simply because the categorization is not clean.</p>

<p>Specifically:</p>

<ul>
  <li>Move implementation and onboarding fees to a distinct revenue category. If they are truly ratable over a contract life, book them ratably. If they are one-time, call them one-time.</li>
  <li>Separate consumption-based overages from committed minimums. The committed portion is recurring; the variable overage is not, and buyers will model it differently.</li>
  <li>For multi-year contracts, disclose the weighted average remaining life. A three-year recurring contract at $500K/year is worth more than three one-year contracts that happen to have renewed.</li>
</ul>

<p>The goal here is not to inflate anything. It is to make sure that when a buyer's QoE provider rebuilds your revenue from source documents, they arrive at the same numbers you have been reporting internally — and that the quality of that revenue is visible without them having to dig.</p>

<h2>2. Expense reclassification — the capitalizable costs hiding in OpEx</h2>

<p>This is the most common and most defensible EBITDA lift we see. In many founder-led and lower-middle-market companies, engineering salaries, consulting fees for multi-year platform builds, and software development costs are expensed as incurred. GAAP allows — and in many cases requires — capitalization of internal-use software development costs once the project passes the application development stage, per ASC 350-40.</p>

<p>A 25-person engineering team where 60% of time is spent on new feature development (not maintenance or bug fixes) can yield seven-figure capitalizable costs annually. That does not "create" EBITDA out of nothing; it moves spend that was genuinely investment below the EBITDA line, where buyers expect to see it.</p>

<p>The same logic applies to:</p>

<ul>
  <li>Implementation costs for ERP or new platform rollouts</li>
  <li>Consulting fees tied to a specific capitalizable project</li>
  <li>Leasehold improvements expensed as repairs</li>
  <li>Internally developed intangibles — brand, processes, trained workforce is not capitalizable, but documented processes tied to a specific implementation often are</li>
</ul>

<p>The discipline here is documentation. Do not attempt this the month before a process. You need time-tracking data, project charters, and a capitalization policy that has been consistently applied for at least two quarters before buyers start asking questions. Anything that looks like a late-stage reclassification done to dress up a deal will get unwound in diligence.</p>

<h2>3. Working capital normalization and the enterprise value bridge</h2>

<p>Working capital does not show up in EBITDA, but it absolutely shows up in the cash-free, debt-free bridge to equity value. And in mid-market deals, the negotiation around the working capital peg routinely moves $2M to $5M of equity value between buyer and seller. Yet most sellers approach the peg as an afterthought, often with numbers their controller generated the week before signing.</p>

<p>Start normalizing now:</p>

<ul>
  <li>Build a 24-month trailing view of net working capital, not 12. A single year smooths over seasonality; two years lets you and your advisor argue a cycle-adjusted peg rather than a point-in-time snapshot.</li>
  <li>Identify what is genuinely operational working capital versus items that belong in the cash or debt-like buckets. Deferred revenue from annual prepaid contracts is a classic fight — buyers try to treat it as debt; sellers argue it is ordinary course working capital. The answer depends on the business, but you need the analysis done before the LOI, not after.</li>
  <li>Scrub AR aging. Any receivable over 120 days is a discussion. Either reserve for it properly (which reduces working capital but removes a diligence risk) or collect it.</li>
  <li>Review AP timing. Companies that consistently stretch payables to 75+ days have a working capital profile that will normalize adversely post-close. Buyers know this and will argue for a higher peg.</li>
</ul>

<p>The goal is not to manipulate the peg — it is to defend a peg that reflects how the business actually operates in a normal cycle, not a snapshot on a specific closing date.</p>

<h2>4. Add-back documentation that survives buyer scrutiny</h2>

<p>Every management presentation we have ever seen has a slide titled "Adjusted EBITDA" with eight to fifteen add-backs totaling 15–40% of reported EBITDA. In almost every case, 30–50% of those add-backs get haircut in diligence — not because they are fabricated, but because they are not documented.</p>

<p>A defensible add-back has three things: a clear category, contemporaneous support, and a reason it will not recur under new ownership. "CEO travel" is not an add-back unless you can document which specific trips, why they were non-recurring, and why the go-forward CEO — who will almost certainly travel — will not incur similar costs. "Legal fees" is not an add-back unless you can point to a specific matter (an M&A transaction, a one-off litigation) that has concluded.</p>

<p>Categories that typically survive:</p>

<ul>
  <li>Transaction costs — legal, accounting, advisory fees tied specifically to the current or a prior process. These are the easiest add-backs to defend if you have invoices.</li>
  <li>Owner compensation above market — if the CEO-owner earns $800K in total comp and the buyer will replace them with a professional CEO at $400K, the delta is defensible. Get a comp benchmark from a reputable source before the process starts.</li>
  <li>One-time legal matters — litigation that has settled, with documented settlement and legal spend.</li>
  <li>Non-recurring customer concessions — documented by customer, reason, and whether the issue has been resolved.</li>
  <li>Owner-related expenses that will not continue — a leased vehicle, a personal travel pattern, a family member on payroll.</li>
</ul>

<p>Categories that routinely get haircut:</p>

<ul>
  <li>"Rebranding" or "website refresh" expenses — buyers argue these are ongoing marketing investments</li>
  <li>System implementations — usually treated as ordinary course for a company at your scale</li>
  <li>Management bonuses tied to the transaction — sometimes defensible, often not, depending on how they are structured</li>
  <li>"Growth investment" add-backs for hires that stayed — if the salesperson is still on the payroll, the cost is recurring</li>
</ul>

<p>Build your add-back schedule as a living document starting 12 months before a process. Every add-back should have a supporting file: the invoice, the board resolution, the comp study, the settlement agreement. When the QoE team arrives, you hand them a binder, not a spreadsheet.</p>

<h2>5. Run-rate EBITDA with a defensible methodology</h2>

<p>Run-rate — or "annualized" or "pro forma" — EBITDA is where the most equity value is captured and the most credibility is lost. Done correctly, it lets a buyer see the earnings power of a business that has acquired a new customer, opened a new location, or closed a cost action that is not yet reflected in trailing numbers. Done poorly, it looks like wishful thinking and gets ignored.</p>

<p>The methodology matters more than the number. A defensible run-rate adjustment has:</p>

<ul>
  <li><strong>Timing certainty</strong> — the event has already occurred or is contractually committed. A signed enterprise contract with a defined start date can be run-rated. A "likely to close" pipeline opportunity cannot.</li>
  <li><strong>Quantification tied to evidence</strong> — a cost action of $1.2M annually should tie to specific employees terminated with documented severance, or a specific contract cancelled with a termination letter.</li>
  <li><strong>A clear annualization approach</strong> — if you are annualizing a customer that started in Q3, you need to show that their consumption pattern in the two quarters you have data for supports the annualized number.</li>
  <li><strong>No double-counting</strong> — if you have added back the cost of a position that was eliminated, you cannot also run-rate the revenue of a new hire who is covering the work.</li>
</ul>

<p>A useful test: if the run-rate adjustment is more than 15% of reported LTM EBITDA, expect buyers to discount it heavily or demand an earn-out structure that ties purchase price to actual future performance. The cleanest processes we have seen keep run-rate adjustments modest and rigorously documented, preserving credibility for the adjustments that really matter.</p>

<h2>The bridge, not the number</h2>

<p>Sponsors and buyers do not pay on a single EBITDA number. They pay on the bridge — reported, adjusted, pro forma, run-rate — and they pay a premium when every step of that bridge is defensible without having to be argued. The work above is not about inflating anything. It is about making sure that when a buyer's diligence team rebuilds your numbers from source, they arrive at the same place you did, with the same story.</p>

<p>We typically start this work six to twelve months before a process. If you are closer to a transaction than that, there is still meaningful value to capture — particularly in add-back documentation and working capital normalization — but the revenue recognition and capitalization work requires runway to avoid looking opportunistic.</p>

<p>If you want to walk through where your bridge is vulnerable, <a href="/services/exit-readiness">we run exit readiness engagements</a> specifically for this window, and our <a href="/services/fpa-performance-management">FP&amp;A and performance management work</a> builds the operating cadence that makes the diligence phase far less painful.</p>
`,
  },

  {
    slug: "quality-of-earnings-what-pe-sponsors-look-for",
    title: "Quality of Earnings: What PE Sponsors Actually Look For (And What Kills Deals)",
    metaDescription:
      "A senior practitioner's view of what a quality-of-earnings analysis actually tests, the red flags that kill deals, and how to prepare your finance function 6–12 months before a process.",
    date: "2026-04-06",
    readTime: "10 min read",
    category: "PE Advisory",
    excerpt:
      "QoE is not an audit. It is a forensic read of revenue durability, margin sustainability, and management credibility. Here is what sponsors actually test, the red flags that kill processes, and how to prepare a finance function six to twelve months out.",
    content: `
<p class="lead">A quality-of-earnings report is not an audit. It is a forensic investigation into whether the earnings you are presenting are sustainable, defensible, and purchasable at the multiple you are asking for. The distinction matters, because the most expensive mistake a seller makes is treating QoE as a check-the-box exercise rather than the document that will, more than any other, determine final purchase price.</p>

<p>Having sat on both sides of these processes, here is what sponsors actually test, the red flags that kill deals, and what a finance function should be doing six to twelve months before a process begins.</p>

<h2>What a QoE actually tests</h2>

<p>A competent QoE is structured around four questions, asked in increasing order of risk.</p>

<p><strong>First: are the numbers real?</strong> This is the accounting-integrity layer. The provider will reconcile reported revenue to cash, to signed contracts, and to shipping or delivery evidence. They will test cutoff — whether revenue booked in December actually belongs to December. They will scrub AR aging for customers that no longer exist and inventory for slow-moving or obsolete stock being carried at cost. This layer usually takes two to three weeks and, if the books are clean, produces minor adjustments.</p>

<p><strong>Second: what is the durable earnings base?</strong> This is where adjustments get contested. The provider will rebuild trailing twelve-month EBITDA from source data, strip out non-recurring items (both above and below the line management disclosed), and produce an "adjusted EBITDA" number that almost always differs from management's. The delta — the haircut — is the negotiation.</p>

<p><strong>Third: is that earnings base sustainable?</strong> Here the analysis moves from backward-looking to forward-looking. Customer concentration, retention cohorts, pricing trends, gross margin by segment, and competitive positioning all feed a view on whether the LTM number is a reasonable proxy for the go-forward number. This is where deals die quietly — not because the numbers were wrong, but because they were unrepeatable.</p>

<p><strong>Fourth: does management know their business?</strong> This is the softest layer and the one sellers underestimate most. Across three or four working sessions, the diligence team is forming a view on whether the CFO can explain month-over-month variances without looking at a spreadsheet, whether the commercial leader knows the top ten customers by name and contract terms, and whether the operations lead can articulate why gross margin moved 140 basis points between Q2 and Q3. A finance function that cannot answer these questions fluently will produce a report with a lot of hedging language, and that hedging translates directly into price.</p>

<h2>The red flags that kill deals</h2>

<p>Not all diligence findings are created equal. Some generate purchase price adjustments; some cause the sponsor to walk. The difference is usually about pattern, not magnitude.</p>

<h3>Customer concentration above 30%</h3>

<p>A single customer representing more than 30% of revenue is a structural problem for most sponsors, and one representing more than 50% is a deal-breaker for many credit committees regardless of how well the business performs. The issue is not just the loss risk — it is the pricing power dynamic. A concentrated customer sets the price, dictates payment terms, and has optionality on renewal that the seller does not. The earnings that concentration produces are real today and rented tomorrow.</p>

<p>If you are running a process with material concentration, get ahead of it: segment the contract (term length, renewal history, share-of-wallet trajectory), document the customer relationship depth (multiple stakeholders, embedded integration, switching cost), and expect the multiple to be discounted regardless. Sponsors who will pay through concentration are rare and they reward preparation.</p>

<h3>Channel or platform dependency</h3>

<p>A business that generates 70% of its traffic from Google or 60% of its revenue through Amazon has a different risk profile than a diversified business with the same total revenue. Channel dependency is a version of customer concentration — the "customer" is the platform — and buyers discount accordingly. When Google changes its algorithm or Amazon changes its terms, the business does not get a vote.</p>

<p>Defensible positioning requires a clear view of the unit economics by channel, the CAC-to-LTV ratio on organic versus paid, and credible plans to diversify. Plans without execution history are rhetoric. Execution history without a sustainable trajectory is noise.</p>

<h3>One-time revenue dressed as recurring</h3>

<p>The fastest way to lose credibility in a QoE is to present ARR that includes non-recurring items. Implementation fees, one-off professional services, and variable consumption overages are not ARR. Buyers have learned to check this — they will ask for an ARR bridge from the prior period, and they will cross-check it against invoice data. A bridge that does not tie will be rebuilt by the provider, and the rebuilt version will be materially lower than what was presented.</p>

<p>This is not a hard problem to avoid. Separate recurring from non-recurring at the ledger level, not just in a waterfall slide. Buyers do not punish businesses that have meaningful non-recurring revenue; they punish businesses that try to classify it as something it is not.</p>

<h3>Aggressive capitalization or timing</h3>

<p>Capitalization of software development costs is legitimate and often under-utilized. But there is a line between applying ASC 350-40 consistently and capitalizing costs that belong in OpEx. A buyer's diligence team will test the capitalization policy, walk through the specific projects capitalized in the last 24 months, and look at what percentage of the engineering team's time is being capitalized. A policy that suddenly shifts six months before a process — or that captures an unusually high percentage of costs — will be reversed, and the resulting EBITDA restatement is often the single largest haircut in a QoE report.</p>

<p>The same logic applies to revenue timing. Pulling Q1 bookings into Q4 to hit a number is detectable. The cutoff test will find it, and the loss of credibility will cost more than the revenue gained.</p>

<h3>Working capital inconsistency</h3>

<p>A finance function that cannot explain why DSO moved from 45 to 62 days over the last year has a credibility problem. A business where AP has quietly stretched from 30 to 75 days has a cash flow problem masquerading as a margin improvement. Both will show up in the working capital analysis, and both will show up in the negotiation over the peg.</p>

<h2>Revenue quality: the single most important concept</h2>

<p>If a sponsor leaves diligence with only one number in mind, it is the revenue quality score — an informal composite of four factors.</p>

<ol>
  <li><strong>Recurring versus non-recurring mix.</strong> High-quality revenue has a high recurring percentage with documented contracts, renewal behavior, and visible retention.</li>
  <li><strong>Gross retention and net retention.</strong> Gross retention below 85% in a subscription business is a structural concern. Net retention below 100% means the business is losing ground before new sales are counted.</li>
  <li><strong>Customer acquisition economics.</strong> CAC payback period, the ratio of CAC to LTV, and how these have trended over 24 months. A business where payback has extended from nine to eighteen months is growing more expensively — even if revenue is still growing.</li>
  <li><strong>Concentration and dependency.</strong> Customer, channel, and geographic concentration — each measured and each stress-tested.</li>
</ol>

<p>A business that scores well on all four commands a premium. A business that is weak on any one of them can still transact, but at a discount that reflects the risk.</p>

<h2>EBITDA adjustments that survive versus get haircut</h2>

<p>We covered the anatomy of a defensible add-back in a <a href="/blog/ebitda-quick-wins-before-exit">prior post</a>. The short version:</p>

<ul>
  <li><strong>Survive:</strong> Transaction costs with invoices. Documented owner comp above market. Concluded legal matters with settlement documents. One-time customer concessions with supporting detail. Discontinued lines with operational evidence.</li>
  <li><strong>Get haircut:</strong> "Non-recurring" marketing and rebranding. System implementations at a scale the business should reasonably expect to continue. Growth investment add-backs for hires still on payroll. Management bonuses tied to the transaction without structure.</li>
</ul>

<p>The pattern: anything that requires the buyer to believe something will not happen in the future is haircut. Anything backed by documentation that something specific already happened and has concluded tends to survive.</p>

<h2>Preparing the finance function six to twelve months before a process</h2>

<p>By the time a banker is engaged, most of the value a finance function can create has already been created or missed. The work that matters happens in the six to twelve months before a bank is hired.</p>

<p><strong>Months 12 to 9 before process:</strong></p>

<ul>
  <li>Revenue recognition cleanup, with at least two quarters of clean reporting under the revised methodology</li>
  <li>Capitalization policy review and consistent application, supported by time-tracking data</li>
  <li>Chart of accounts rationalization, so revenue by segment and margin by segment are cleanly reportable</li>
  <li>Month-end close discipline — if close is taking longer than ten business days, it needs attention before diligence, not during</li>
</ul>

<p><strong>Months 9 to 6 before process:</strong></p>

<ul>
  <li>Customer cohort analysis and retention reporting — gross and net retention by cohort, by segment, by price tier</li>
  <li>Add-back schedule construction, built as a running file with supporting documentation collected contemporaneously</li>
  <li>24-month working capital analysis with cycle-adjusted view</li>
  <li>CFO readiness — can the CFO walk a buyer through twelve months of variance fluently? If not, this is the time to fix it</li>
</ul>

<p><strong>Months 6 to 3 before process:</strong></p>

<ul>
  <li>Sell-side QoE (commissioned by the seller) to surface issues before a buyer finds them</li>
  <li>Data room preparation — organized by topic, version-controlled, with a clear index</li>
  <li>Management presentation build, tested in front of an independent reviewer</li>
  <li>Gap analysis on anything the sell-side QoE flagged, with remediation plans</li>
</ul>

<p><strong>Months 3 to 0:</strong></p>

<ul>
  <li>Final data room review</li>
  <li>Run-rate and pro forma adjustments locked, with supporting evidence</li>
  <li>Management interview preparation — key questions, practiced answers, alignment across the team</li>
</ul>

<p>The businesses that run clean processes — the ones where multiple bidders hold price and the buyer's final LOI closely matches the seller's expectations — are almost always the ones that started this preparation a year in advance.</p>

<h2>The meta-point</h2>

<p>A QoE is the most expensive document in a sale process, and it is the one where preparation pays the highest return. The businesses that treat it as a finance exercise underperform; the businesses that treat it as a credibility exercise — about the finance team, the data, and the narrative — capture more value.</p>

<p>We build <a href="/services/exit-readiness">exit readiness programs</a> specifically around this preparation window, and our <a href="/services/strategic-finance-advisory">strategic finance advisory work</a> focuses on making the finance function itself diligence-ready as part of ordinary operations. If you are inside twelve months of a process — and especially if you are not sure whether you are — that is the conversation worth having now.</p>
`,
  },

  {
    slug: "modern-pe-reporting-stack",
    title: "The Modern PE Reporting Stack: From Spreadsheets to Real-Time Dashboards",
    metaDescription:
      "The monthly Excel board pack is dying. Here is what a modern PE reporting stack looks like — ERP to ETL to Power BI to automated board decks — and what actually changes when sponsors see real-time numbers.",
    date: "2026-04-09",
    readTime: "11 min read",
    category: "Automation",
    excerpt:
      "The monthly 60-page Excel board pack is dying. Here is what a modern reporting stack looks like end to end, the metrics sponsors want in real time, realistic implementation timelines, and what actually changes when month-end reporting compresses from three weeks to three days.",
    content: `
<p class="lead">The monthly Excel board pack — the 60-page, manually assembled, three-weeks-after-month-end ritual — is on its way out. Not because Excel is bad, but because the operating cadence that produced it no longer matches how PE-backed businesses are managed. Sponsors want visibility in days, not weeks. Operators want to spot covenant pressure before it becomes a covenant breach. And the cost of the automation that delivers this has collapsed to the point where it is hard to justify not doing it.</p>

<p>Here is what a modern PE reporting stack actually looks like, the metrics it should surface in real time, and — importantly — what implementation actually requires in terms of time, budget, and organizational change.</p>

<h2>Why the monthly Excel board pack is dying</h2>

<p>A decade ago, the sequence looked like this: accounting closed the books over ten to fifteen business days, FP&amp;A built a variance analysis over another five, the CFO assembled the board deck over a weekend, and the board saw numbers three weeks old by the time they met. The commentary was careful. The data was accurate. And it was structurally impossible to act on in time to change the quarter.</p>

<p>Three things have broken this model:</p>

<ul>
  <li><strong>Decision velocity.</strong> Sponsors are running multi-company portfolios where a covenant issue at one company, a churn spike at another, and a working capital squeeze at a third all demand attention simultaneously. Three-week-old data is not a platform for managing any of them.</li>
  <li><strong>Data availability.</strong> Modern ERPs, CRMs, and operational systems produce transaction-level data continuously. The effort is no longer in gathering the data — it is in presenting it intelligibly.</li>
  <li><strong>Cost structure.</strong> The stack that automates this work used to cost $300K and eighteen months. It now costs $40–80K and twelve weeks, and the economics tip decisively in favor of building it.</li>
</ul>

<p>The manually assembled deck is not just slow — it is also fragile. It depends on the same analyst, the same hour of the weekend, the same version of a template. Automation makes the reporting resilient to staff turnover, which in a market with the current level of finance-function churn is no small consideration.</p>

<h2>What a modern stack looks like</h2>

<p>A well-designed PE reporting stack has four layers. Each layer is simpler than people think, and each has a clear owner.</p>

<h3>Layer 1 — Source systems (ERP, CRM, subledgers)</h3>

<p>The starting point is always the general ledger. If the ERP is NetSuite, QuickBooks, Sage Intacct, or Dynamics, the data is accessible. If the ERP is a heavily customized legacy system, the first project is usually to get structured extracts working reliably — sometimes a daily batch export is the pragmatic answer, not a real-time API.</p>

<p>Alongside the GL, the CRM (Salesforce, HubSpot), the billing system (Stripe, Zuora, Chargebee), payroll (ADP, Paycom, Rippling), and any operationally significant subledger (inventory, production, scheduling) feed the model. For most portfolio companies, three to five source systems cover 90% of the reporting need.</p>

<h3>Layer 2 — ETL and the data model</h3>

<p>This is the layer most often underbuilt and most often the bottleneck. An ETL process — we commonly use a combination of native connectors, Azure Data Factory, or Fivetran-style tools depending on the environment — pulls data from source systems on a defined cadence (nightly for most, hourly for revenue-critical feeds).</p>

<p>The data lands in a central store: Azure SQL, Snowflake, or for smaller businesses, a well-structured set of data marts inside Power BI itself. The model — dimensional, with clean fact and dimension tables — is where business logic lives. "Recurring revenue," "gross margin," "working capital" are defined here, once, and every downstream dashboard reads from the same definition. This matters more than anything else for credibility: if the board and the sponsor are looking at numbers that do not reconcile, the stack is worse than useless.</p>

<h3>Layer 3 — Visualization and self-service</h3>

<p>Power BI (or Tableau, or Looker — all capable; we default to Power BI for the PE-backed mid-market because the Microsoft licensing is already in place and the total cost of ownership is lowest) sits on top of the model and delivers:</p>

<ul>
  <li>A CEO/CFO operating dashboard — revenue, EBITDA, cash, covenant headroom, top variances</li>
  <li>A sponsor dashboard — portfolio-level metrics, comparison to plan, comparison to prior year, rolling forecast</li>
  <li>Functional dashboards — sales pipeline, collections, inventory, headcount — for the operators who own them</li>
  <li>A drill-down capability that lets anyone with access go from a summary tile to the transaction-level detail without opening a spreadsheet</li>
</ul>

<p>Done well, the dashboards replace 80% of the ad hoc reporting requests that currently consume the finance team's week.</p>

<h3>Layer 4 — Automated board deck and distribution</h3>

<p>The final layer is the one that frees the CFO's weekend. A templated PowerPoint — or more often, an exported PDF from a dedicated Power BI report — pulls the current month's metrics, auto-populates commentary placeholders, and produces a board-ready document in minutes. Commentary is still human-written, but it is written against a deck that is already complete rather than assembled from scratch.</p>

<p>For distribution, a combination of email automation, a secure sponsor portal, and scheduled Power BI refreshes delivers the package on a defined cadence without manual intervention.</p>

<h2>The metrics sponsors actually want in real time</h2>

<p>Not every metric belongs in real time. Some metrics — gross margin by customer, lifetime value, cohort retention — are genuinely monthly or quarterly. Others need to be visible at the day or week level.</p>

<p>The short list of metrics that belong in a real-time view:</p>

<ul>
  <li><strong>Revenue</strong> — MTD, QTD, YTD, with pacing against plan. For SaaS, separate ARR movement (new, expansion, contraction, churn) from consumption and services revenue.</li>
  <li><strong>EBITDA</strong> — with a rolling full-year view, not just the current month. The single most useful view is LTM EBITDA over the last 18 months as a line chart — it shows the trajectory that a board pack rarely conveys.</li>
  <li><strong>Cash</strong> — balance, 13-week forecast with variance to prior forecast, and trigger points against facility utilization.</li>
  <li><strong>Covenant compliance</strong> — current and projected ratios against covenants, with a headroom view that flags pressure before it is a problem. For covenant-heavy structures, this is the single most valuable view on the stack.</li>
  <li><strong>Working capital</strong> — DSO, DPO, DIO, net working capital — tracked against trend and plan.</li>
</ul>

<p>Metrics that should be weekly or monthly, not real-time:</p>

<ul>
  <li>Customer retention and cohort behavior</li>
  <li>Gross margin by segment</li>
  <li>Pipeline-to-bookings conversion</li>
  <li>Employee productivity and revenue per FTE</li>
</ul>

<p>A useful discipline: a metric only belongs on the real-time dashboard if an operator would take action on a material move within a week. Everything else is a monthly view.</p>

<h2>Implementation timeline — what 8 to 12 weeks actually looks like</h2>

<p>The pitch for this kind of work is often "real-time reporting in eight weeks." That is sometimes true, and often misleading. A realistic timeline for a clean first version looks like this.</p>

<p><strong>Weeks 1 to 2: discovery and data assessment.</strong> Inventory source systems. Assess data quality. Define the business logic — what is revenue, what is EBITDA, what is working capital — and reconcile to the current reporting. Identify the five to ten metrics that will be on the v1 dashboard and the twenty-ish that will follow.</p>

<p><strong>Weeks 3 to 6: data infrastructure.</strong> Stand up the ETL, build the data model, populate history (typically 24–36 months), and reconcile against source systems. This is the unglamorous phase, and it is where the project either earns credibility or loses it. If the dashboards do not tie to the ERP to the dollar, nothing else matters.</p>

<p><strong>Weeks 5 to 8 (overlapping): dashboard build.</strong> Build the CEO/CFO dashboard first. Validate with the CFO before moving on. Build the sponsor dashboard. Build two or three functional dashboards. Train the operators who will use them.</p>

<p><strong>Weeks 9 to 12: automation, board deck, and production hardening.</strong> Automate the monthly pack. Build the refresh schedule. Document the model. Transition ownership to an internal resource (or an ongoing managed service arrangement).</p>

<p>Twelve weeks produces a solid v1. The back half of the first year is where the stack matures — adding forecasting, scenario modeling, deeper operational metrics, and the second wave of dashboards for commercial and operational leaders. The businesses that treat twelve weeks as the end of the project usually underperform the ones that treat it as the beginning.</p>

<h2>What actually changes when sponsors have real-time visibility</h2>

<p>The productivity case for this work is easy to make — the CFO gets their weekend back, the finance team stops doing manual reconciliation, and the reporting package stops being a constraint on the operating cadence. But the more interesting effects are strategic.</p>

<p><strong>Faster, cheaper interventions.</strong> When a sponsor sees churn ticking up in week two of a quarter rather than in the monthly deck three weeks after quarter-end, there is time to act. The difference between spotting a collections issue at day 35 and day 75 is often the difference between a working capital adjustment and a bank conversation.</p>

<p><strong>Better board discussions.</strong> When the board meeting starts with everyone looking at the same live numbers rather than the finance team walking through a deck, the conversation shifts from "what happened" to "what now." The CFO spends less time presenting and more time advising. Board members ask sharper questions because they have had a chance to see the data ahead of time.</p>

<p><strong>Diligence-ready, always.</strong> A portco with a mature reporting stack is perpetually in a state where an LOI could arrive tomorrow and the finance team would be ready. Month-end close is faster, data is cleaner, and the QoE process — when it eventually comes — is a weeks-long confirmation exercise rather than a months-long scramble.</p>

<p><strong>Organizational confidence.</strong> This one is soft but real. A finance team that has to fight its data every month is a finance team that cannot focus on the interesting work. A stack that just produces the numbers, reliably, on schedule, lets the CFO and controller spend their time on strategy, on working with operators, on the things they were hired to do.</p>

<h2>The ROI case</h2>

<p>A reasonable reference point: a $150–300M revenue PE-backed business spends $60–120K on this kind of build and ongoing maintenance annually. The finance team recovers 40–60% of a senior analyst's time. Month-end close compresses from fifteen to seven business days. The CFO recovers two to four days per month. The sponsor gets a portfolio view that did not exist.</p>

<p>In pure labor terms, the math works. In decision-quality terms — faster interventions, better board conversations, diligence-readiness — the return is larger and harder to quantify, but it is the reason this work has become table stakes for well-run PE-backed businesses.</p>

<p>We build these stacks as part of our <a href="/services/power-bi-automation">Power BI automation practice</a>, and our <a href="/powerbi">interactive showcase</a> illustrates the kind of dashboards that sit on top of a well-designed model. If you are evaluating whether to rebuild the reporting cadence at your portfolio companies, that is the right conversation to have before committing to a platform or a partner.</p>
`,
  },

  {
    slug: "why-portfolio-company-needs-fractional-cfo",
    title: "Why Your Portfolio Company Needs a Fractional CFO (Not Another Controller)",
    metaDescription:
      "The controller-CFO gap is the most underestimated risk in PE portfolio companies. Here is what a controller delivers, what only a CFO can, and why fractional is often the right answer in the $20–150M revenue range.",
    date: "2026-04-13",
    readTime: "10 min read",
    category: "PE Advisory",
    excerpt:
      "Most portfolio companies in the $20–150M revenue range have a capable controller and no CFO. The gap shows up in investor reporting, strategic modeling, and exit preparation. Here is what a fractional CFO actually delivers in the first 90 days, and how to decide between fractional and full-time.",
    content: `
<p class="lead">The most common structural problem we see in PE portfolio companies in the $20–150M revenue range is simple: they have a capable controller and no CFO. Sponsors often discover this during the first board meeting post-close, and the consequences compound over the hold period. The finance function produces clean numbers that nobody is doing much with. Management reports to the board are reactive. Strategic conversations happen in the absence of a finance leader who can model them. And exit preparation starts twelve months too late.</p>

<p>The instinct to solve this by hiring another controller — or "upgrading" the existing controller into a CFO title — misreads what the gap actually is. Here is what a controller does well, what a CFO does that a controller typically cannot, and why a fractional CFO is frequently the right answer in the exact revenue range where the gap is most acute.</p>

<h2>The controller–CFO gap that sponsors underestimate</h2>

<p>A strong controller runs a disciplined finance operation. They own close, ensure GAAP compliance, manage the audit, run AP/AR, and produce accurate financial statements. In a well-run operation, close happens in seven business days, audit goes smoothly, and monthly financials tie to the penny. This is valuable and necessary work.</p>

<p>It is also backward-looking, precision-oriented, and operationally focused. The controller's job is to make sure what happened is accurately recorded. The CFO's job is to make sure what is about to happen is shaped by the finance function's view of it.</p>

<p>The gap shows up in three areas:</p>

<p><strong>Strategic modeling.</strong> A controller can build a budget. A CFO builds a three-statement model, runs scenarios, stress-tests assumptions, and translates strategic questions into financial ones. "What does it cost to open a third distribution center by Q3 2027?" is a CFO question. Answering it requires assumptions about working capital, capex, ramp profiles, incremental headcount, covenant impact, and cash runway — not a line in the budget.</p>

<p><strong>Investor and board narrative.</strong> A controller produces a board pack. A CFO owns the narrative around it. The difference matters because sponsors — the good ones — want a finance leader who can walk into a board meeting with a view on the business, not a presenter of numbers. "Revenue is up 14% YoY" is a controller sentence. "Revenue is up 14% YoY but the growth is concentrated in our two largest customers and we need to decide this quarter whether to accept the concentration or invest in diversification" is a CFO sentence.</p>

<p><strong>Exit preparation and transaction readiness.</strong> A controller makes sure the books are auditable. A CFO makes sure the business is sellable — and the two are very different tasks. Add-back documentation, working capital normalization, run-rate methodology, management interview preparation, data room architecture, sell-side QoE coordination — these live on the CFO's side of the line, and they are the reason the hold period either compounds or dissipates value in the last twelve months.</p>

<h2>What a fractional CFO delivers in the first 90 days</h2>

<p>The work in a portfolio company's first quarter under a fractional CFO engagement has a fairly standard shape. The specifics vary; the sequence rarely does.</p>

<p><strong>Days 1–30: diagnostic and stabilization.</strong> The first month is about establishing a baseline. That means:</p>

<ul>
  <li>A full read of the finance function — close cadence, chart of accounts quality, reporting cadence, systems inventory, team capabilities</li>
  <li>A read of the actual business — unit economics, gross margin by segment, customer concentration, working capital profile, cash runway, covenant headroom</li>
  <li>A read of the commercial and operational data — pipeline, bookings cadence, productivity, churn and retention, operational KPIs</li>
  <li>A rebuild or validation of the 13-week cash forecast</li>
  <li>Initial conversations with the sponsor to align on priorities, reporting expectations, and a 90-day plan</li>
</ul>

<p>The output of month one is a short diagnostic memo — typically five to ten pages — that lays out what the finance function is doing well, what it is not, and the ten or so priorities for the next two quarters.</p>

<p><strong>Days 30–60: reporting cadence and strategic modeling.</strong> Month two is where the finance function starts delivering differently.</p>

<ul>
  <li>A redesigned monthly reporting package — shorter, more focused, with commentary that addresses "what changed and why" rather than "here are the numbers"</li>
  <li>A three-statement operating model, built from the ground up if necessary, tied to the budget but flexible enough to run scenarios</li>
  <li>A forecast process that the commercial and operational leaders can actually use — not a spreadsheet the CFO maintains in isolation</li>
  <li>A first pass at the KPI framework that will govern how the business is measured for the next year</li>
</ul>

<p><strong>Days 60–90: strategic projects and longer-range work.</strong> By month three, the fractional CFO is operating as a full partner to the CEO and the sponsor.</p>

<ul>
  <li>Engagement on whatever the two or three biggest strategic questions are — pricing, a major hire, a facility decision, an M&amp;A opportunity, a capital structure question</li>
  <li>An initial view on exit readiness if the hold period suggests it is relevant — even if exit is twenty-four months away, the work that matters starts now</li>
  <li>A plan for the finance team itself — who stays, who develops, what hires are needed, and how the team transitions from current state to the structure the business will need in twelve months</li>
</ul>

<p>At ninety days, there should be no question about whether the arrangement is working. The board meeting is sharper, the sponsor has better visibility, the CEO has a finance partner rather than a reporter, and the organization has clarity about where the business is and where it is going.</p>

<h2>The cost comparison: $250K+ full-time versus $8–15K/month fractional</h2>

<p>A qualified full-time CFO in a PE-backed business in the $50–200M revenue range is a $250K–400K total compensation hire — base, bonus, equity or phantom equity, and benefits. Add recruiting fees and the all-in first-year cost often reaches $325–475K. More importantly, the search typically takes four to seven months, and the first six months after hire are a ramp period rather than a contribution period. A full-time CFO hire, done well, has a twelve-month all-in cost approaching $500K before the value starts compounding.</p>

<p>A fractional CFO engagement, at the seniority level that actually delivers the work described above, runs $8,000 to $15,000 per month — $96K to $180K annually. The engagement starts in two to three weeks, not two to three quarters. The contribution is immediate. And the engagement can scale up or down as the business requires.</p>

<p>The case for fractional is not that it is cheaper — in some situations, a full-time hire is the right call despite the cost. The case is that for a large segment of PE-backed businesses, the finance leadership the business needs is not a full-time seat. A business at $40M revenue with a PE sponsor typically needs twelve to twenty hours per week of genuine CFO-level attention, plus a competent controller handling the operational work. Hiring a full-time CFO at that scale means either overpaying for capacity that is underutilized or hiring someone at a seniority level below what the business actually needs.</p>

<p>A fractional CFO with three or four engagements of that size brings senior expertise at the scale the business uses. It is a genuinely better model for a specific band of businesses.</p>

<h2>When fractional is right — and when it is not</h2>

<p>Fractional CFO arrangements are the right answer in a reasonably well-defined set of circumstances:</p>

<ul>
  <li><strong>Revenue between $10M and $150M.</strong> Below $10M, the business is often small enough that a fractional controller plus an external advisor covers the need. Above $150M, the scale of the role typically justifies a full-time hire — and the business can afford the premium.</li>
  <li><strong>Known complexity triggers.</strong> A pending transaction (acquisition, refinancing, exit), an audit, a new facility or line of business, a systems implementation, or a covenant or compliance issue — any of these create a bolus of CFO-level work that a fractional arrangement can absorb without permanent cost.</li>
  <li><strong>Transitional windows.</strong> The departure of a previous CFO or a full-time search in flight. Fractional coverage for three to nine months is often materially better than leaving the seat open or handing the work to an under-qualified controller.</li>
  <li><strong>PE portfolios with multiple companies below the full-time threshold.</strong> A sponsor with six to ten companies in the $20–100M range can get senior finance leadership across the portfolio through fractional engagements at a fraction of the cost of full-time hires at each company.</li>
</ul>

<p>Fractional is not the right answer in several scenarios:</p>

<ul>
  <li><strong>Late-stage pre-exit.</strong> In the final six months before a process, the CFO is running the process. That needs a full-time seat, and the cost of a misstep is high enough to justify it.</li>
  <li><strong>Complex capital markets situations.</strong> A public filing, a major debt issuance, or a complex restructuring needs a full-time, dedicated CFO with time for the work and equity skin in the game.</li>
  <li><strong>Businesses with deep operational complexity.</strong> Multi-location manufacturing, heavily regulated businesses, or businesses with significant international operations usually need a full-time hands-on CFO rather than a fractional one.</li>
</ul>

<p>The clearest way to think about it: fractional works when the work is defined, senior, and discontinuous. It works less well when the work is continuous, deeply operational, and requires constant presence on site.</p>

<h2>How to structure the engagement</h2>

<p>A few patterns that work well in our experience:</p>

<ul>
  <li><strong>Define deliverables, not hours.</strong> An engagement scoped as "two days per week" is a worse construct than one scoped around specific outcomes (monthly board pack, three-statement model, exit readiness plan, 13-week cash forecast, etc.). Deliverables keep the work focused on what matters.</li>
  <li><strong>Align reporting lines clearly.</strong> The fractional CFO reports to the CEO, coordinates with the sponsor, and has the authority to direct the controller and finance team. Fuzziness here causes friction.</li>
  <li><strong>Keep a controller underneath.</strong> Fractional CFO engagements fail when the assumption is that the CFO will also do controller work. They will not, and they should not. A strong controller is non-negotiable.</li>
  <li><strong>Plan for the transition.</strong> Most fractional engagements end, eventually, in a full-time hire when the business grows past the threshold. The right fractional CFO makes that transition easier, not harder — they hire their own replacement, they document the function, and they transition out cleanly.</li>
</ul>

<h2>The meta-point for sponsors</h2>

<p>The choice between a fractional CFO and a full-time hire is a scale question, not a seniority question. The seniority required to do the work is the same either way. The question is whether the business can absorb and justify a full-time seat, or whether it needs senior attention at the scale it uses.</p>

<p>For sponsors running portfolio companies in the $20–150M range, underinvesting in CFO-level capacity is one of the more common value leakages we see in the first two years of a hold period. The $8–15K/month spend on a fractional CFO is recovered in a single board meeting where the sponsor sees the business more clearly, or in a single strategic decision that is made on a model rather than on instinct.</p>

<p>Our <a href="/services/fractional-cfo-controller">fractional CFO and controller practice</a> is built around exactly this band of businesses, and our <a href="/services/strategic-finance-advisory">strategic finance advisory work</a> typically runs alongside it when the scope expands into board advisory or transaction support. If the gap described above looks familiar, that is the right conversation to have before the next board meeting, not after.</p>
`,
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
