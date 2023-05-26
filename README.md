# GPT4-Moblie

原作者是NijikaMyWaifu。发布在reddit的一个油猴脚本，在 ChatGPT 网页版使用 GPT-4 Mobile 模型，从而实现在PC上不限制GPT4-Mobile的模型用量。

如果你对版权有异议，请提交issue。

If you have an objection to copyright, please submit an issue。

# Use GPT-4 Mobile UserScript

这个油猴脚本用于修改 OpenAI 聊天室中使用的语言模型，将默认的语言模型切换为" GPT-4 Mobile"。

具体的分析还可以阅读本项目的 code-review 和 compare ，可以进一步了解有关GPT版本的一些事情。

## 要求和限制

1. 你可以正常访问OPENAI相关的网站，尤其是 `chat.openai.com` 。[推荐一个能通OPENAI和ChatGPT官网的VPS](https://my.frantech.ca/aff.php?aff=4329)。
2. 同时你要能在浏览器直接访问这个域名的网站，而不是其他需要替换域名反向代理等，除非你会魔改。
3. 建议使用Chrome浏览器、或者EDGE浏览器等Chrome的异父异母的亲兄弟。
4. 一个浏览器扩展，我建议是 Tampermonkey ，建议去谷歌浏览器扩展应用商店下。
5. 中英文基本的阅读能力。
6. 一个OPENAI账号，且开通了ChatGPT Plus订阅，不然你访问不了GPT4-Mobile模型。

## 安装

1. 首先，你需要安装一个支持 UserScript 的浏览器扩展，例如 Tampermonkey。
2. 在你的 UserScript 扩展中，创建一个新的脚本并将这个脚本的内容粘贴进去。
3. 保存脚本，然后去 `chat.openai.com`打开使用即可。
4. 需要开启GPT-4 Mobile 时勾选网页正下方的按钮。如果不需要开启，则可以取消勾选或者在插件处停用该脚本。

## 使用

在 `chat.openai.com` 上，你将看到页面底部有一个 "Use GPT-4 Mobile" 的复选框。选中此复选框，即可切换到 "GPT-4 Mobile" 模型。你的选择将会被保存，所以在你下次访问时，这个选项将保持上次的状态。

## 功能

- 可以切换语言模型为 "GPT-4 Mobile"（会覆盖其他选择，包括网页上的GPT3.5和GPT4）。
- 复选框的状态会被保存，方便下次访问时使用。

## 注意事项

- 这个脚本可能不会与 OpenAI 的所有更新保持兼容。
- 使用此脚本时需要注意，因为它会修改默认的语言模型，如果你勾选了那个按钮的话。
- 你需要本身就能在对应浏览器访问ChatGPT4（网络、浏览器、PLUS订阅）
- 如果你在无痕模式使用则需要注意是否在扩展插件设置中启用了无痕的支持。
- 不得用于违法违规行为，后果自行承担，和本人无关。
- 该方式随时可能会被阻止、封锁等。甚至对你的账号、IP等造成损失，比如被封号等。由此产生的经济损失和法律风险由使用者自行承担。

## 版权

该油猴脚本原版出处为Reddit用户 https://www.reddit.com/user/NijikaMyWaifu/ 的帖子 https://www.reddit.com/r/saraba2nd/comments/13mbiw1 标题为 “一个油猴脚本，在 ChatGPT 网页版使用 GPT-4 Mobile 模型”。

OpenAI相关为 https://openai.com/ 网站控制者所有。

油猴相关为 https://greasyfork.org/ 网站控制者所有。

如果你对版权有异议，请提交issue。

If you have an objection to copyright, please submit an issue。

## 版本

在 compare.md 中，可以注意到截至2023-05-26 HKT，GPT官方在GPT4-Mobile、GPT4-Browser两个环境下，不使用联网模式是不能认知到自己是GPT4模型的，而GPT3.5和GPT4以及进行联网的GPT4-Browser没有这个问题，可以认知到自己的模型版本
