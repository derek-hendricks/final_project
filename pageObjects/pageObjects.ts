import { By, WebElement } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class PcGamer extends BasePage {
  searchBar: By = By.className("button-search");
  searchBarInput: By = By.css('.search-box input');
  searchBarButton: By = By.css(".search-submit");
  results: By = By.css("#content");
  facebookIcon: By = By.css("a.icon-facebook");
  facebookPage: By = By.css('#facebook');
  reviewsTab: By = By.css('.menu-item-reviews a');
  reviewArticleLink: By = By.css('#Item1 .article-link');
  reviewArticleJumpToCommentsLink: By = By.css('.jump-to-comments a');
  reviewArticleCommentsHeader: By = By.css('.comment-count-placeholder');

  constructor() {
    super({ url: "https://www.pcgamer.com/" });
  }
  async search(searchTerm: string) {
    return this.setInput(this.searchBarInput, `${searchTerm}`);
  }
  async clickSearch() {
    return this.click(this.searchBar);
  }
  async clickSearchButton() {
    return this.click(this.searchBarButton);
  }
  async getResults() {
    return this.getText(this.results)
  }
  async openFacebookPage() {
    return this.click(this.facebookIcon);
  }
  async openReviewsPage() {
    return this.click(this.reviewsTab);
  }
  async openArticleReviewPage() {
    return this.click(this.reviewArticleLink);
  }
  async openReviewArticleComments() {
    return this.click(this.reviewArticleJumpToCommentsLink);
  }
  async getReviewCommentsHeaderText() {
    return this.getText(this.reviewArticleCommentsHeader);
  }
}