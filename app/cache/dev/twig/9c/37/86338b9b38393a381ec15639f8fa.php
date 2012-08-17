<?php

/* TwentyfourAppBundle:Secured:login.html.twig */
class __TwigTemplate_9c3786338b9b38393a381ec15639f8fa extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("TwentyfourAppBundle::layout.html.twig");

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "TwentyfourAppBundle::layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        // line 4
        echo "<div class=\"row\">
    <div class=\"span6 offset3\">
        <div class=\"login modal\">
            <div class=\"modal-header\">
                <h1>Login</h1>
            </div>
            <div class=\"modal-body\">

                <div class=\"content\">

                    <p>Choose between two default users: <em>user/userpass</em> <small>(ROLE_USER)</small> or <em>admin/adminpass</em> <small>(ROLE_ADMIN)</small></p>

                    ";
        // line 16
        if ($this->getContext($context, "error")) {
            // line 17
            echo "                        <div class=\"alert alert-error\">
                            <strong>Error</strong> ";
            // line 18
            echo twig_escape_filter($this->env, $this->getAttribute($this->getContext($context, "error"), "message"), "html", null, true);
            echo "
                        </div>
                    ";
        }
        // line 21
        echo "
                </div>

                <form class=\"form-horizontal\" action=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("_security_check"), "html", null, true);
        echo "\" method=\"post\">
                    <div class=\"control-group\">
                        <div class=\"control-label\"><label for=\"username\">Username</label></div>
                        <div class=\"controls\">
                            <input type=\"text\" id=\"username\" name=\"_username\" value=\"";
        // line 28
        echo twig_escape_filter($this->env, $this->getContext($context, "last_username"), "html", null, true);
        echo "\" />
                        </div>
                    </div>

                    <div class=\"control-group\">
                        <div class=\"control-label\"><label for=\"password\">Password</label></div>
                        <div class=\"controls\">
                            <input type=\"password\" id=\"password\" name=\"_password\" />
                        </div>
                    </div>

                    <div class=\"form-actions\">
                        <button type=\"submit\" class=\"btn btn-primary\">Login</button>
                    </div>
                </form>

            <div>
        </div>
    </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "TwentyfourAppBundle:Secured:login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  66 => 28,  59 => 24,  54 => 21,  48 => 18,  45 => 17,  43 => 16,  29 => 4,  26 => 3,);
    }
}
