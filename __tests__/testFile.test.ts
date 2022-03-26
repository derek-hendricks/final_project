import { until } from "selenium-webdriver";
import { PcGamer } from "../pageObjects/pageObjects";

const pcGamer = new PcGamer;

afterAll(async () => {
  await pcGamer.driver.quit();
});

beforeEach(async () => {
  await pcGamer.navigate();
});

test("Can do a search", async () => {
  await pcGamer.clickSearch();
  await pcGamer.search("halo");
  await pcGamer.clickSearchButton();
  let textResults = await pcGamer.getResults();
  expect(textResults).toContain("Halo");
});

test("Can comment on an article on the reviews page", async () => {
  await pcGamer.openReviewsPage();
  await pcGamer.openArticleReviewPage();
  await pcGamer.openReviewArticleComments();
  let pageUrl: string = await pcGamer.driver.getCurrentUrl();
  expect(pageUrl).toContain("comment-jump");
});

test("Can open facebook social media page", async () => {
  await pcGamer.openFacebookPage();
  let pageTabs: string[] = await pcGamer.driver.getAllWindowHandles();
  await pcGamer.driver.switchTo().window(pageTabs[1]);
  await pcGamer.getElement(pcGamer.facebookPage);
  let pageUrl: string = await pcGamer.driver.getCurrentUrl();
  expect(pageUrl).toBe("https://www.facebook.com/pcgamermagazine");
  await pcGamer.driver.switchTo().window(pageTabs[0]);
});

