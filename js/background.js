/*chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({url: chrome.extension.getURL('guide.html')});    //DO NOT FORGET TO TURN ON
});
*/
chrome.contextMenus.removeAll();
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: chrome.extension.getURL('gameTab.html')});
});
var menuItemSMMO = {
  "id": "SMMO",
  "title": "SimpleMMO - Wiki",
  "contexts": ["all"]
};

var menuItemWikiHome = {
  "parentId": "SMMO",
  "id": "wikiHome",
  "title": "📗 Home",
  "contexts": ["all"]
};

var menuItemWikiQuests = {
  "parentId": "SMMO",
  "id": "wikiQuests",
  "title": "📙 List of Quests",
  "contexts": ["all"]
};

var menuItemWikiArena = {
  "parentId": "SMMO",
  "id": "wikiArena",
  "title": "📕 Arena",
  "contexts": ["all"]
};

var menuItemWikiReg = {
  "parentId": "SMMO",
  "id": "wikiReg",
  "title": "📘 Regeneration",
  "contexts": ["all"]
};

var menuItemUpdates = {
  "parentId": "SMMO",
  "id": "updates",
  "title": "📰 Update logs",
  "contexts": ["all"]
};

chrome.contextMenus.create(menuItemSMMO);
chrome.contextMenus.create(menuItemWikiHome);
chrome.contextMenus.create(menuItemWikiQuests);
chrome.contextMenus.create(menuItemWikiArena);
chrome.contextMenus.create(menuItemWikiReg);
chrome.contextMenus.create(menuItemUpdates);


chrome.contextMenus.onClicked.addListener(function(menu, tab) {
  switch (menu.menuItemId) {
      case "updates":
        chrome.tabs.create({
          url: 'https://simplemmo.fandom.com/wiki/Update_logs',
          active: true
        });
      break;

      case "gameTab":
          chrome.tabs.create({url: chrome.extension.getURL('gameTab.html')});
      break;

      case "wikiHome":
        chrome.tabs.create({
          url: 'https://simplemmo.fandom.com/wiki/Home',
          active: true
        });
      break;

      case "wikiArena":
        chrome.tabs.create({
          url: 'https://simplemmo.fandom.com/wiki/Battle_arena',
          active: true
        });
      break;

      case "wikiQuests":
        chrome.tabs.create({
          url: 'https://simplemmo.fandom.com/wiki/List_of_Quests',
          active: true
        });
      break;

      case "wikiReg":
        chrome.tabs.create({
          url: 'https://simplemmo.fandom.com/wiki/Regeneration',
          active: true
        });
      break;
  }
});
