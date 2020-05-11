import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeBlock from "@theme/CodeBlock";
const bash = (...args) => `~~~bash\n${String.raw(...args)}\n~~~`;

const features = [
  {
    title: <>Modular</>,
    imageUrl: "img/puzzle_pieces.svg",
    description: (
      <>Plug in new models, acquisition functions, and optimizers.</>
    ),
  },
  {
    title: <>Built on PyTorch</>,
    imageUrl: "img/pytorch_logo.svg",
    description: (
      <>
        Easily integrate neural network modules. Native GPU &amp; autograd
        support.
      </>
    ),
  },
  {
    title: <>Scalable</>,
    imageUrl: "img/expanding_arrows.svg",
    description: (
      <>Support for scalable GPs via GPyTorch. Run code on multiple devices.</>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


    // getStartedSection
    const pre = '```';
    // Example for model fitting
    const modelFitCodeExample = `${pre}python
import torch
from botorch.models import SingleTaskGP
from botorch.fit import fit_gpytorch_model
from botorch.utils import standardize
from gpytorch.mlls import ExactMarginalLogLikelihood

train_X = torch.rand(10, 2)
Y = 1 - torch.norm(train_X - 0.5, dim=-1, keepdim=True)
Y = Y + 0.1 * torch.randn_like(Y)  # add some noise
train_Y = standardize(Y)

gp = SingleTaskGP(train_X, train_Y)
mll = ExactMarginalLogLikelihood(gp.likelihood, gp)
fit_gpytorch_model(mll)
    `;
    // Example for defining an acquisition function
    const constrAcqFuncExample = `${pre}python
from botorch.acquisition import UpperConfidenceBound

UCB = UpperConfidenceBound(gp, beta=0.1)
    `;
    // Example for optimizing candidates
    const optAcqFuncExample = `${pre}python
from botorch.optim import optimize_acqf

bounds = torch.stack([torch.zeros(2), torch.ones(2)])
candidate, acq_value = optimize_acqf(
    UCB, bounds=bounds, q=1, num_restarts=5, raw_samples=20,
)
candidate  # tensor([0.4887, 0.5063])
    `;

function QuickStart() {
  return (
  <div
    className="productShowcaseSection"
    id="quickstart"
    style={styles.lightBackground}
  >
    <h2>Get Started</h2>
    <div className="container padding-vert--xl text--left">
      <ol>
        <li>
          <h4>Install BoTorch:</h4>
          <a>via conda (recommended):</a>
          <CodeBlock>{bash`conda install botorch -c pytorch -c gpytorch`}</CodeBlock>
          <a>via pip:</a>
          <CodeBlock>{bash`pip install botorch`}</CodeBlock>
        </li>
        <li>
          <h4>Fit a model:</h4>
          <CodeBlock>{modelFitCodeExample}</CodeBlock>
        </li>
        <li>
          <h4>Construct an acquisition function:</h4>
          <CodeBlock>{constrAcqFuncExample}</CodeBlock>
        </li>
        <li>
          <h4>Optimize the acquisition function:</h4>
          <CodeBlock>{optAcqFuncExample}</CodeBlock>
        </li>
      </ol>
    </div>
  </div>);
}

// const SplashContainer = props => (
//       <div className="homeContainer">
//         <div className="homeSplashFade">
//           <div className="wrapper homeWrapper">{props.children}</div>
//         </div>
//       </div>
//     );

//     const Logo = props => (
//       <div className="splashLogo">
//         <img src={props.img_src} alt="Project Logo" />
//       </div>
//     );

//     const ProjectTitle = () => (
//       <h2 className="projectTitle">
//         <small>{siteConfig.tagline}</small>
//       </h2>
//     );

//     const PromoSection = props => (
//       <div className="section promoSection">
//         <div className="promoRow">
//           <div className="pluginRowBlock">{props.children}</div>
//         </div>
//       </div>
//     );

//     const Button = props => (
//       <div className="pluginWrapper buttonWrapper">
//         <a className="button" href={props.href} target={props.target}>
//           {props.children}
//         </a>
//       </div>
//     );

    // return (
    //   <SplashContainer>
    //     <Logo img_src={baseUrl + 'img/botorch_logo_lockup_top.png'} />
    //     <div className="inner">
    //       <ProjectTitle siteConfig={siteConfig} />
    //       <PromoSection>
    //         <Button href={docUrl('introduction.html')}>Introduction</Button>
    //         <Button href={'#quickstart'}>Get Started</Button>
    //         <Button href={`${baseUrl}tutorials/`}>Tutorials</Button>
    //       </PromoSection>
    //     </div>
    //   </SplashContainer>
    // );

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}: ${siteConfig.tagline}`}
      description={
        "BoTorch is a library for Bayesian Optimization built on PyTorch."
      }
    >
      {/* <header>
        <div className="homeContainer">
          <div className="homeSplashFade">
            <div className="wrapper homeWrapper">
              <div className="container">
                <div className="splashLogo"> 
                  <img
                    src="img/botorch_logo_lockup_top.png"
                    alt="Project Logo"
                  />
                </div>
                <div className="inner">
                <h2 className="projectTitle">
                  <small>{siteConfig.tagline}</small>
                </h2>
                <div className="section promoSection">
                  <div className="promoRow">
                    <div className="pluginRowBlock">
                      <div className={styles.buttons}>
                        <div className="pluginWrapper buttonWrapper">
                          <a
                            className="button"
                            href={useBaseUrl("docs/introduction")}
                          >
                            Introduction
                          </a>
                        </div>

                        <div className="pluginWrapper buttonWrapper">
                          <a className="button" href={"#quickstart"}>
                            Get Started
                          </a>
                        </div>

                        <div className="pluginWrapper buttonWrapper">
                          <a className="button" href={useBaseUrl("tutorials")}>
                            Tutorials
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div>
          <QuickStart />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
