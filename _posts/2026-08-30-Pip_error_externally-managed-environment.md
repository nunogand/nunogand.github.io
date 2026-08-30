---
layout: post
title: How to Solve the error: externally-managed-environment When Using pip in a Virtual Environment
description: "How to Solve the error: externally-managed-environment When Using pip in a Virtual Environment"
date: 2026-08-30
categories: [Python]
tags: [Python]
img: header_python.webp
subtitle: and avoid nasty shortcuts.
published: true
---
If you've created and activated a Python virtual environment (venv) but still get the dreaded:
{% highlight console %}
---
error: externally-managed-environment
---
{% endhighlight %}

when running pip, the issue may not be what you think.

## The Real Problem

At first glance, it looks like your virtual environment isn't working correctly. After all, one of the main purposes of a venv is to isolate your Python packages from the system installation.

In my case, the virtual environment was activated, but pip was still failing with the externally-managed-environment error. The root cause turned out to be surprisingly simple: The pip command I was running belonged to a different Python installation than the one used by the active virtual environment.

When you type:
{% highlight console %}
---
pip install some-package
---
{% endhighlight %}
your shell resolves the pip executable based on your PATH. If that pip points to a different Python installation, it may ignore the active virtual environment and use the system-managed Python instead.

That's when you can end up seeing the externally-managed-environment error, even though you're inside a virtual environment.

## Solution

Instead of invoking pip directly, use:

{% highlight console %}
---
python -m pip install some-package
---
{% endhighlight %}

By using python -m pip, you're explicitly telling Python to run the pip module associated with the currently active Python interpreter.

If your virtual environment is activated, the python command refers to the Python executable inside that environment. As a result, the correct version of pip is used automatically.