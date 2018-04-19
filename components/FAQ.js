import React from 'react'
import { Link } from '../routes';
import {
  Container,
  Grid,
  Responsive,
  Segment,
  Header,
  Image,
  Icon,
  Divider,
  Button
} from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'
import LaunchModal from './LaunchModal'

const FAQ = () => {
  return (
    <Segment>
      <Container textAlign='center'>
        <Header as='h1'>
          <Image src='static/platform_logo.png' size='mini' centered />
          Platform
    </Header>
        <h3>What is the CrowdCoverage Platform?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>
            The CrowdCoverage platform is an interface wherein the process of purchasing insurance is as simple and streamline as shopping for an item on Amazon, where insurance providers are enabled to quickly and efficiently underwrite policies on a sophisticated marketplace, and where smart contract technology makes the experience cheaper on both ends.
          </p>
          <p>
            On the CrowdCoverage platform, claims are settled by a decentralized and representative tribunal according to communally agreed-upon protocol, instilling the claims-management process with decentralized-consensus objectivity.
          </p>
        </ScrollAnimation>
        <h3>What makes it better than any other insurance website?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>
            Frictional costs, superfluous middlemen, conservatism of risk, and scalability impediments all plague the insurance sector today. Respectively, these issues increase overhead expenses for insurance providers, raise premium costs for the insured, lower the likelihood of the average consumer securing insurance coverage, and restrict the insurance market to large-scale deals that exclude large potential markets of both small-scale personal item and temporary insurance policies.
          </p>
          <p>
            A decentralized and crowdfunded property-coverage market will alleviate if not eliminate all of these issues, thus a) cutting combined expenses for insurance providers and consumers, b) increasing the likelihood of the average consumer securing insurance policies, and c) opening the market to small-scale consumers as well as to temporary policies—a market which heretofore has remained largely untapped.
          </p>
          <p>More can be read on this in the <a href="/static/cc_whitepaper.pdf" download="cc_whitepaper.pdf">Whitepaper</a>.</p>
        </ScrollAnimation>
        <h3>What sort of items can be insured on the platform?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>For the alpha platform, we will primarily be offering “package” deals, allowing for the insuring of personal electronic devices, including, for example, cryptocurrency mining rigs, cameras, and phones.</p>
          <p>It is our hope to rapidly expand the scope of our platform, eventually offering a marketplace like Ebay, wherein any type of item can be submitted for insurance. Once this feature is implemented, we hope to expand even FURTHER to include other forms of insurance, such as renters, car, travel, etc. </p>
        </ScrollAnimation>
        <h3>When can I use it?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>We hope to have our alpha platform launched by Q3 of this year.</p>
        </ScrollAnimation>
        <h3>How are claims handled?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>In the event of a claim being made by an insured party, that user will submit an online claim application that includes a comprehensive review of the event that occurred, including but not limited to photographs, detailed explanations, police reports, receipts, and the contact information of witnesses or local authorities. Coverage provider(s) will be notified of the claim submission.</p>
          <p>Tribunal users will then be given the opportunity to vote on the validity of the claim.</p>
          <p>Tribunal members are users who have undergone training provided by CrowdCoverage regarding standardized protocol for reviewing insurance claims, and have been subsequently approved by the company for participation in the tribunal system. Once approved, the tribunal member may therefore review claims submissions in exchange for COVR tokens.</p>
          <p>For a given claims submission, the number of tribunal members assigned will be determined by a) the announced value of the insured item, b) the experience of the tribunal member(s) assigned, and c) the amount of information provided by the user about the claim itself.</p>
          <p>If a tribunal user contacts one of the listed parties in the claims application, that user’s vote will be augmented in its sway, and that user will receive a commensurate increase in the incentive provided to them. Algorithmic data trawls will be used to detect and flag any fraudulent use of the tribunal module; in this manner, bot manipulation, DDOS attacks, and tribunal bias will be prevented from influencing claim outcomes.</p>
          <p>Tribunal users are given 36 hours of deliberation per claim. Votes may be changed during this time and all votes remain anonymous. At the end of the 36 hours, the decision is made according to majority vote and the appropriate amount of escrow money, as stipulated by the smart contract, will be allocated to the party dictated by the majority vote (see below).</p>
          <p>In another measure intended to eradicate tribunal bias in the claims management process, tribunal members are incentivized to vote in favor of perceived mutual consensus. The COVR fee paid by the user undergoing claim the claim is then distributed evenly amongst tribunal members in the majority voting party. If, for example, five out of seven members vote in favor of a coverage claim, those five will split the claims fees. In this way, purposeful-denial (moral-negligence) votes will be dis-incentivized.</p>
          <p>In accordance with the above mechanisms, the claims management process is granted a safeguard against fraud as well as human bias, and claims decisions occur without the need for a central facilitative entity, altogether revolutionizing the way claims are handled in the sector.</p>
        </ScrollAnimation>
        <h3>How decentralized is it, really?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>Really, really. The smart contracts would iterate and carry out policy payments and claims decisions even if our site went down.</p>
          <p>For now, we’ll have to store some large data files server-side, if only for the purpose of preventing the massive storage system fees incurred by image upload on the blockchain; once Ethereum Casper goes live, we anticipate this issue being resolved, at which point we hope to achieve full application autonomy.</p>
          <p>Our current goal for doing so is early 2019. If all goes as planned, though we may even get there by late 2018.</p>
        </ScrollAnimation>
        <h3>Is there any room for fraud?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>No. After many conversations with experts currently working claims management positions within the insurance industry, we came up with the idea for our revolutionary decentralized claims process, intended to prevent bot-fueled vote manipulation, human tribunal bias, purposeful-denial voting, and common exploitations of Ethereum-based vote modules.</p>
          <p>More can be read on these preventative measures in our whitepaper.</p>
        </ScrollAnimation>
      </Container>
      <Container textAlign='center' style={{ padding: '30px' }}>
        <Header as='h1'>
          <Image src='static/token.png' size='mini' centered />
          Token
    </Header>
        <h3>What purpose do COVR tokens serve?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>COVR tokens act as incentive-based fuels for the CrowdCoverage insurance ecosystem. Within the CrowdCoverage ecosystem, COVR tokens act as service validators, claims-management incentives, and anti-fraud devices.
Primarily, COVR tokens operate much in the same manner as tokens in an arcade, or as service validators. That is to say, tokens must be used to “run” the CrowdCoverage Network program; as such, tokens must be used to propose a policy; this nominal fee serves multiple purposes.</p>
          <p>First, it operates as a first-defense vetting device—it prevents an excess of fake or half-hearted proposals. Second, it compensates for the gas used in the sending and receiving of tokens. Finally, a minimal amount is used to incentivize the upkeep of the platform itself.</p>
          <p>COVR tokens are used to incentivize the efforts of tribunal members. This ensures that claims are handled both fairly and efficiently.
We are proud to announce, however, that we do NOT require that deductibles and premiums be paid in COVR tokens; you are free to pay with whichever erc-20 compatible token you prefer. </p>
        </ScrollAnimation>
        <h3>Does your solution really need a token?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>Yes. Our primary reasons for minting the COVR tokens are twofold: ecosystem incubation and fund control.</p>
          <p>With the influx of new tokens popping into existence in what seems like a daily event, we can see why COVR tokens can come across as being no different. For the sake of getting a proof of concept working on Testnet, we chose to create a standalone token on top of Ethereum. However, building COVR as a sidechain is not off the table and something we would love to continue to converse more about with the community. For now, however, it is not possible, and could lead to catastrophe; here’s why.</p>
          <p>While mapping the architecture of this platform, we realized that we needed a way to slowly control the growth of our userbase and token inflow, specifically during our alpha phase. Because we knew that we wanted the final version of our platform to be completely decentralized (allowing it to continue operating even if our site went down), we realized we needed to bottleneck the amount of funds allowed through it from the beginning. At first we believed that this would be possible by placing max caps on the amount of ETH that could be submitted to the smart contract, but even with this measure there is no good way of capping the number of users; smart contracts are open to all, barring centralized server-side restrictions. As such, rather than conducting some internal smart contract coding-gymnastics that would leave us vulnerable to hacking exploits, we opted to mint our own token that we could control the total volume of. </p>
          <p>Hence the structure of our pre-sale. By the time our alpha platform launches, we only want to have a fraction of COVR tokens circulating; that way any preexisting vulnerabilities or weaknesses in its structure can be discovered before allowing millions of dollars to flow through it. To be sure, we have a predetermined amount of tokens set aside in the case of any issues with the platform that may warrant refunds. If, however, we released the entire fund of tokens for use on our first alpha version, we would not be able to recover from catastrophic failure. As such, the creation of our own token enabled us to incubate the platform, so to speak, before going fully live.</p>
        </ScrollAnimation>
        <h3>What is the User Growth Pool?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>A subsidization program will be utilized on the alpha V1 and V2 CrowdCoverage platforms in order to allow for competitive fee rates while also generating sufficient revenue to sustain operational business costs. The subsidy program will end when sufficient userbase (SU) is achieved to cover overhead costs and prolong business practices indefinitely.</p>
          <p>The UGP currently consists of 7% of our total token pool, or 28,000,000 tokens. In accordance with estimates for fees generated by projected revenues, the UGP should ensure that for every $1 subsidized, another dollar is made by the company; about ⅕ to ¼, however, will be used as flat payments to providers, to incentivize their usage of the platform. Therefore, the UGP will generate about 5 extra months of operational business beyond basic funding from sale(s), possibly more if the market allows. This timeline in addition to the estimated timeline generated by the funding of our Pre-Sale allows us an approximate one year deadline for generating revenue (longer once our public sale is completed).</p>
          <p>Thus, the UGP will allow for extended operational timelines and a rapidly-expanded userbase which will galvanize the symbiotic efficacy of the CrowdCoverage ecosystem.</p>
        </ScrollAnimation>
        <h3>When can I participate in the pre-sale?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>We are excited to announce that we will be partnering with our friends at <strong>StartEngine</strong> to conduct our pre-sale! Starting on April 20th, we will be selling 107,000 shares of common stock in CrowdCoverage, Inc., for a price of $1 per share.</p>
        </ScrollAnimation>
        <h3>How will the pre-sale work?</h3>
        <ScrollAnimation animateIn='fadeIn' duration='2' animateOnce={true}>
          <p>$100 will be the minimum available for purchase, with each $100 spent granting the user a bonus of 8,000 COVR tokens which can be used on our platform!</p>
          <p>Check out our <Link prefetch route={`/tokeninfo`} as='a'>Pre-Sale Info</Link> for more details</p>
        </ScrollAnimation>
      </Container>
      <Container textAlign='center'>
        <LaunchModal />
      </Container>
    </Segment>
  )
}

export default FAQ