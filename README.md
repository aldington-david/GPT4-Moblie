# GPT4-Moblie

原作者是NijikaMyWaifu。发布在reddit的一个油猴脚本，在 ChatGPT 网页版使用 GPT-4 Mobile 模型，从而实现不限制GPT4用量。

如果你对版权有异议，请提交issue。

If you have an objection to copyright, please submit an issue。

# Use GPT-4 Mobile UserScript

这个油猴脚本用于修改 OpenAI 聊天室中使用的语言模型，将默认的语言模型切换为" GPT-4 Mobile"。

具体的分析还可以阅读本项目的 code-review 和 compare ，可以进一步了解有关GPT版本的一些事情。

## 安装

1. 首先，你需要安装一个支持 UserScript 的浏览器扩展，例如 Tampermonkey。
2. 在你的 UserScript 扩展中，创建一个新的脚本并将这个脚本的内容粘贴进去。
3. 保存脚本，然后导航到 `chat.openai.com`。

## 使用

在 `chat.openai.com` 上，你将看到页面底部有一个 "Use GPT-4 Mobile" 的复选框。选中此复选框，即可切换到 "GPT-4 Mobile" 模型。你的选择将会被保存，所以在你下次访问时，这个选项将保持上次的状态。

## 功能

- 可以切换语言模型为 "GPT-4 Mobile"。
- 复选框的状态会被保存，方便下次访问时使用。

## 注意事项

- 这个脚本可能不会与 OpenAI 的所有更新保持兼容。
- 使用此脚本时需要注意，因为它会修改默认的语言模型。

## 版权

该油猴脚本原版出处为Reddit用户 https://www.reddit.com/user/NijikaMyWaifu/ 的帖子 https://www.reddit.com/r/saraba2nd/comments/13mbiw1 标题为 “一个油猴脚本，在 ChatGPT 网页版使用 GPT-4 Mobile 模型”。

OpenAI相关为 https://openai.com/ 网站控制者所有。

油猴相关为 https://greasyfork.org/ 网站控制者所有。

如果你对版权有异议，请提交issue。

If you have an objection to copyright, please submit an issue。

## 版本

在 compare.md 中，可以注意到截至2023-05-26 HKT，GPT官方在GPT4-Mobile、GPT4-Browser两个环境下，不使用联网模式是不能认知到自己是GPT4模型的，而GPT3.5和GPT4以及进行联网的GPT4-Browser没有这个问题，可以认知到自己的模型版本
