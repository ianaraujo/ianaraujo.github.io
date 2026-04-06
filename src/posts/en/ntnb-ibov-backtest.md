---
title: "Ibovespa or IPCA+6.5%: Which Is the Better Investment?"
description: "In high-interest-rate environments, common in Brazil, investors constantly face a conflict between locking in attractive fixed-income rates or buying equities at historically low multiples"
image: "/posts/ntnb-ibov-backtest/avg-return-eval.png"
date: "21/10/2024"
tag: "Investing"
type: "essay"
---

![Tesouro IPCA+ Rates](/posts/ntnb-ibov-backtest/taxa-ipca-tesouro.png)

If you've been investing in Brazil for any length of time, you've probably seen this scenario before. The interest rate is at 10.75% with upward expectations, the rates on inflation-linked government bonds (NTN-B) are at levels not seen since 2017, and the stock market is trading at low multiples.

On top of that, investors are deeply pessimistic about risk assets, drawn in by the high yields available in fixed income.

In these moments, the question arises: "Should I lock in these attractive rates and guarantee a strong long-term return, or should I take advantage of risk assets trading at historically low or 'discounted' multiples?" **This is a very common dilemma, and I'll try to determine — historically — which has been the better decision.**

This article was inspired by a post on the [Itaú Asset blog](https://blog.itau.com.br/itauasset/pilula-de-etfs-ipca6-e-acoes).

NTN-Bs are a set of government bonds indexed to the IPCA (Brazil's official inflation index). The easiest way to invest in these bonds is through Tesouro Direto, which updates rates daily (see image above). What sets these assets apart from other fixed-income instruments is that, being government-issued, they carry very low credit risk.

As a result, investors use this rate as a benchmark for other investment opportunities — as a reference when investing in private credit assets or when comparing fund performance.

The current rate, **IPCA+6.5%**, is considered extremely attractive by a large portion of investors. This interest rate level is seen as high — that is, above the country's neutral rate. This is why many investors believe in a "mean reversion" movement, although it's not entirely uncommon to find periods in history where these bonds offered similar rates.

![NTN-B Yield History](/posts/ntnb-ibov-backtest/taxa-historico-ntnb.png)

Recently, American investor Howard Marks published an article called ["Ruminating on Asset Allocation"](https://www.oaktreecapital.com/insights/memo/ruminating-on-asset-allocation), highlighting key differences between the fundamental assets in portfolio construction: equities and bonds.

According to Marks, **there is a fundamental difference between being an owner and being a lender**. When we invest in equities, we put our capital at risk with no guarantee of return, buying a stake in a business and gaining a claim on its profits or cash flows.

When investing in an NTN-B or private credit instrument, on the other hand, we lend money with the promise of a fixed return, receiving interest as contracted. The key distinction is that owners face uncertain returns, while lenders have guaranteed returns.

Marks also argues that the choice between being an owner or a lender is one of the most important decisions an investor must make. This decision defines the level of risk the investor is willing to tolerate and how much return they expect to receive.

The debate between these two asset classes and the current level of fixed-income rates prompted me to ask: **in this scenario, is it better to be an owner or a lender?**

The Itaú Asset article concludes that "the best entry point for the Ibovespa has coincided with periods when the Tesouro IPCA+ 2035 rate was between IPCA+6% and IPCA+7%."

Following that line of thinking, I ran a [simulation](https://github.com/ianaraujo/ntnb-ibov-backtest) using Python, considering 12-month windows, measuring Ibovespa returns during periods of elevated rates (IPCA+6.5% or higher) and comparing them to the index's historical average return.

In this simulation, going back to 2005, **the average 12-month return of the Ibovespa in high-rate environments (IPCA+6.5% or above) was 24.5%, compared to a historical average of 10%.**

So, without a doubt, this is historically one of the best entry points for the Brazilian stock market. But if we compare Ibovespa returns to investing in Tesouro IPCA+ at current rates, what does the result look like?

To answer that, I simulated investments using Ibovespa returns and IPCA+6.5% across 6, 12, 24, 36, and 60-month windows during periods when NTN-B rates exceeded 6.5%.

![Historical Investment Returns](/posts/ntnb-ibov-backtest/avg-return-eval.png)

We can see that over shorter time horizons, the Ibovespa frequently outperforms IPCA+6.5%. However, over longer time horizons, it's quite challenging to beat fixed income at these rates. By investing in Tesouro Direto, the investor has the advantage of locking in these returns for periods well beyond 5 years.

**The goal of this study is not, in any way, to make an investment recommendation.** In fact, no definitive conclusions can be drawn from these results. Some investors may be attracted by the current environment to invest in risk assets, while others may prefer the security of government bonds and the attractive real long-term return that is hard to find elsewhere.

As Howard Marks said, the most important decision is defining the desired "risk posture" — combining ownership and debt assets to position the portfolio at the risk/return point best suited to the investor's profile.
