var texMacros = {
 mgreen: ["\\textcolor{var(--my_green)}{#1}", 1],
 mpurple: ["\\textcolor{var(--my_purple)}{#1}", 1],
 mred: ["\\textcolor{var(--my_red)}{#1}", 1],
 mblue: ["\\textcolor{var(--my_blue)}{#1}", 1],
        Wlamb: "W_{\\mathrm{L}}",
    ss: "m",
    p: "p",
    Vest: "\\hat{V}",
    xest: "\\hat{x}",
    conf: "\\beta",
    Vop: "V^{\\star}",
inprod: ["\\langle #1 \\rangle", 1],
obs: "\\mathcal{O}",
bigO: "\\mathcal{O}",
full: ["\\mathbf{#1}", 1],
nodevar: ["#1^{(#2)}", 2],
K: "\\mathcal{K}",
fracp: ["\\left(\\frac{#1}{#2}\\right)", 2],
    mymathbb: ["\\mathrm{I\\!#1}", 1],
ve: ["\\mathbf{#1}", 1],
1: "\\mathbf{1}",
Re: "\\mymathbb{R}",
N: "\\mymathbb{N}",
Z: "\\mathbb{Z}",
psd: ["\\mathbb{S}^{#1}_{\\pplus}", 1],
pd: ["\\mathbb{S}^{#1}_{\\pplus\\pplus}", 1],
barre: "\\overline{\\Re}",
d: "\\mathrm{d}",
dfn: "{}\\mathop{\\mathrel{:}=}{}",
nfd: "{}\\mathop{=\\mathrel{:}}{}",
sstar: "\\scriptstyle\\star",
ssstar: "\\scriptscriptstyle\\star",
plus: ["\\left[{}#1{}\\right]_{\\scriptscriptstyle +}", 1, "     "],
smallmat: ["\\left[\\begin{smallmatrix}#1\\end{smallmatrix}\\right]", 1],
regmatrix: ["\\begin{bmatrix}#1\\end{bmatrix}", 1],
trans: ["#1^{\\scriptscriptstyle\\top}", 1],
pplus: "{\\scriptscriptstyle +}",
ball: "{\\rm I\\!B}",
E: "\\mathrm{I\\!E}",
cone: "\\mathcal{K}",
SOC: ["\\mathcal{SO}_{#1}", 1],
leqc: ["\\preccurlyeq_{#1}", 1],
geqc: ["\\succcurlyeq_{#1}", 1],
argdot: "\\,\\cdot\\,",
C: ["\\mathcal{C}^{#1}", 1],
sep: "\\;\\middle\\vert\\;",
crm: ["\\rho_{\\mid #1}", 1],
io: "\\textrm{i.o.}",
as: "\\textrm{a.s.}",
cov: "\\mathcal{C}",
sample: "\\hat{w}",
W: "W",
nModes: "d",
transmat: "P",
pstat: "p^\\star",
w: "\\mathbf{w}",
nsample: "m",
L: "\\mathcal{L}",
condnodevar: ["#1_{#2|#3}", 3],
nodestree: ["\\nodes_{#1}(#2)", 2],
kb: "k_\\mathrm{b}",
lrn: "s",
cnt: "m",
ambSeq: "\\bar{\\amb}",
crmTV: ["\\crm{#1}^{\\ell_1}", 1],
cE: ["\\E_{|#1}", 1],
amb: "\\mathcal{A}",
ambTV: "\\amb^{\\scriptscriptstyle\\mathrm{TV}}",
simplex: "\\Delta",
pluss: "\\scalebox{.5}{+}",
childvar: ["\\nodevar[\\pluss]{#1}{#2}", 2],
cTVE: ["\\TVE_{|#1}", 1],
learner: "\\mathcal{L}",
nl: "n_s",
lrnset: "\\mathcal{S}",
cost: "V",
Ts: "T_\\mathrm{s}",
xref: "x_{\\mathrm{ref}}",
rinv: "\\mathcal{R}",
maxrinv: "\\rinv^{\\star}",
Xfeas: "\\mathcal{X}",
Xc: "\\Xfeas_{\\mathrm{c}}",
Xs: "\\Xfeas_{\\mathrm{s}}",
Xf: "\\Xfeas_{\\mathrm{f}}",
Vf: "\\cost_{\\mathrm{f}}",
Ufeas: "\\mathcal{U}",
I: "\\mathcal{I}",
lriskbase: ["#4_{#1,#2}^{#3}", 4],
lrisk: ["\\lriskbase{#1}{#2}{#3}{\\rho}", 3],
lriskc: ["\\lriskbase{#1}{#2}{#3,#4}{\\bar{\\rho}}", 4],
tsum: "\\textstyle \\sum",
md: "w",
mdnxt: "v",
hor: "N",
seq: ["#1_{[#2,#3]}", 3],
natseq: ["\\seq{\\N}{#1}{#2}", 2],
ns: "n_x",
na: "n_u",
idx: ["#1^{#2}", 2],
pol: "\\pi",
fa: "\\tilde{f}",
costidx: "0",
confdyn: "C",
RAOCP: "DR-OCP",
nconst: "n_g",
rv: "\\xi",
DR: ["\\hat{#1}", 1],
fc: "\\fa^{\\DR{\\law}_\\hor}",
fcx: "f^{\\DR{\\law}_\\hor}",
nbeta: "n_{\\beta}",
augset: "\\mathcal{Z}",
Y: "\\mathcal{Y}",
betacost: "\\idx{\\beta}{\\costidx}",
Q: "\\mathcal{Q}",
Vtrue: "{\\cost}_{\\hor}^{\\star}",
useq: "\\mathbf{u}",
xseq: "\\mathbf{x}",
ps: "p^\\star",
wcp: "\\tilde{p}",
alcp: "\\tilde{a}",
nrm: ["\\|#1\\| ", 1],
ambKL: "\\amb^{\\scriptscriptstyle\\mathrm{KL}}",
D: "\\mathcal{D}",
DKL: "\\D_{\\scriptscriptstyle\\mathrm{KL}}",
law: "\\kappa",
rad: "\\mathcal{R}",
prob: "\\mathbb{P}",
obsaug: "Y",
yb: "\\mathbf{y}",
ub: "\\mathbf{u}",
path: ["#1_{\\small#2}", 2],
opt: ["\\bar{#1}", 1],
tree: "\\mathcal{T}",
nodesnl: "\\nodes^{-}",
dynsol: "\\Phi",
borel: "\\mathfrak{B}",
regret: "\\mathcal{R}",
actset: "\\mathcal{A}",
banditclass: "\\mathcal{E}",
bayes: "\\mathrm{Bayes}",
freq: "\\mathrm{freq}",
F: "\\mathcal{F}",
G: "\\mathcal{G}",
setto: "\\rightrightarrows",
iidsim: "\\stackrel{\\text{iid}}{\\sim}",
ind: "\\mymathbb{I}",
piSB: "\\pi_{\\text{SB}}",
col: "\\operatorname{col}",
rank: "\\operatorname{rank}",
nul: "\\operatorname{nul}",
ker: "\\operatorname{ker}",
ch: "\\operatorname{ch}",
scen: "\\operatorname{scen}",
diag: "\\operatorname{diag}",
infconv: "\\operatorname{{\\small\\square}}",
proj: "\\operatorname{proj}",
gph: "\\operatorname{gph}",
range: "\\operatorname{range}",
hzn: "\\operatorname{hzn}",
csm: "\\operatorname{csm}",
sgn: "\\operatorname{sgn}",
dir: "\\operatorname{Dir}",
pos: "\\operatorname{pos}",
bd: "\\operatorname{bd}",
epi: "\\operatorname{epi}",
clim: "\\operatorname{c-lim}",
cl: "\\operatorname{cl}",
lip: "\\operatorname{lip}",
dom: "\\operatorname{dom}",
conv: "\\operatorname{conv}",
AVAR: "\\operatorname{AVaR}",
EVAR: "\\operatorname{EVaR}",
itr: "\\operatorname{int}",
ri: "\\operatorname{ri}",
im: "\\operatorname{Im}",
lev: "\\operatorname{lev}",
tr: "\\operatorname{tr}",
prox: "\\operatorname{prox}",
refl: "\\operatorname{refl}",
stt: "\\operatorname{subj. to}",
st: "\\operatorname{s.t.}",
jac: "\\operatorname{J}",
child: "\\operatorname{ch}",
anc: "\\operatorname{anc}",
stage: "\\operatorname{stage}",
nodes: "\\operatorname{nod}",
scenario: "\\operatorname{scen}",
fix: "\\operatorname{fix}",
zer: "\\operatorname{zer}",
dist: "\\operatorname{dist}",
T: "\\operatorname{T}",
TVAVAR: "\\operatorname{r-\\AVAR}",
TVE: "\\operatorname{r-\\E}",
vect: "\\operatorname{vec}",
pre: "\\operatorname{pre}",
mult: "\\operatorname{Mult}",
gauss: "\\operatorname{\\mathcal{N}}",
wishart: "\\operatorname{MNIW}",
argmin: "\\operatorname*{argmin}",
argmax: "\\operatorname*{argmax}",
maximize: "\\operatorname*{maximize}",
minimize: "\\operatorname*{minimize}",
essmax: "\\operatorname*{ess max}",
essinf: "\\operatorname*{ess inf}"
};
