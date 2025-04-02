# Reveal.js slide deck

Template repo for reveal.js slides.


## Installation 

Make sure you have `npm` installed. To do so, follow the instructions here: 
[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Then, from the `presentation` directory, run 
```
npm install 
```
to download all necessary dependencies.

## Presenting 
After installation, simply run 
```
npm start
```
from the `presentation` directory. 

Alternatively, you can simply run `present.sh`, assuming you use Brave browser.

## Presentation outline 


What is optimization

(Underappreciated), hidden technology that powers almost all
sophisticated, intelligent algorithm today.

If you consider something to be AI, you can be sure there is some
type of optimization involved.

Some examples.

- Advanced robotics systems:
- Boston dynamics robots
- Self-driving cars + drones
- Use MPC, a planning algorithm that solves an optimization problem
every few milliseconds to determine its next move
- "training" AI models
- Logistics: packing the boxes in a truck for instance
- Inventory management
- Path planning
- Engineering design: optimize the shape of an airfoil

It often pairs well with other areas of expertise, as we will come back to.

All of these problems consist of 2 basic ingredients
Constraint set $X$: set of possible decisions (could be infinitely many),
Cost/objective function $f(x)$: takes a decision $x$ and tells you how good/bad it is.
By convention, $f$ is a cost: lower is better.

Problem statement: \minimize f(x)

Challenges:
- Modeling the problem in a form that can easily be optimized: Show two examples of a cost
- May involve machine learning to find the correct $f$, which is in itself an optimization problem!
- Do we have formulas to predict parts of the outputs?
- Using (or developing) the right solver that can efficiently return a(n approximate) solution at the desired
precision
- How fast do you need your answer?
ms (robotics control systems) <--> hours (engineering design problems)

Now, to illustrate how all of this works in practice,
let's have a look at a concrete mixture design problem
- Mixture design requires picking weight fractions $x_i \geq 0$, $x_1 + \dots + x_n = 1$.
- Our objective $f$ is some combination of material properties.
- Core challenge, how to predict these?!
- Gray-box modeling. We use a data-driven model, but impose certain constraints to
enforce facts that we know to be true, but the model may not automatically pick up
from the data:
e.g.,
- Compressive strength is nonnegative!
- Compressive strengths increase by at least 6% between 3, 7 and 28 days.
...
These constraints can be translated to constraints on the model parameters through
some algebraic manipulations. We invite you to have a look at our paper in case you
are interested.

Results 
    - Show fit quality (7% MSE) 
    - Show the heatmap -- Seems that superplasticizer is very effective in increasing the short-term strength. 
    - Taking into account the accuracy, we achieve ...

Extensions:
    - Interesting opportunities for future work:
    - Introducing new materials?  
        - Which mixtures to test -- design of experiments is an optimization problem
        - Introducing slags, which may have unknown compositions. 
            - Can we adaptively update the mixture while monitoring the composition?
            - Considering only partial control? Some components are only available in the form of a compound. 
