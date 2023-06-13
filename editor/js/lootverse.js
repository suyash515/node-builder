function PersonaNode() {
    this.addInput("Arin", "string");
    this.addOutput("Montague", "string");
    this.properties = {
        Persona: "Montague"
    };

    this.combo = this.addWidget("combo", "Arin", "Montague", function(v) {
    }, {
        values: ["Montague", "Katy"]
    });
}

PersonaNode.title = "Persona";

PersonaNode.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Persona Node", PersonaNode);




function InitializationNode() {
    this.addInput("Type", "string");
    this.addOutput("Initialization", "string");
    this.properties = {
        Type: "Initialization",
        "Application Name": "",
        Description: "",
        "Initialization Prompt": ""
    };

    this.combo = this.addWidget("combo", "Type", "Initialization", function(v) {
    }, {
        values: ["Initialization", "Complete"]
    });
}

InitializationNode.title = "Initialization-Complete";

InitializationNode.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Initialization Node", InitializationNode);




function InputOutputNode() {
    this.addInput("Input", "string");
    this.addOutput("Output", "string");
    this.properties = {
        Type: "",
        Prompt: ""
    };

    this.combo = this.addWidget("combo", "Type", "Input", function(v) {
    }, {
        values: ["Input", "Output"]
    });
}

InputOutputNode.title = "Input-Output";

InputOutputNode.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Input-Output Node", InputOutputNode);




function PromptNode() {
    this.addInput("Library", "string");
    this.addOutput("Output", "string");
    this.properties = {
        Library: "",
        Prompt: ""
    };

    this.combo = this.addWidget("combo", "Library", "", function(v) {
    }, {
        values: ["Outrank Article", "Midjourney"]
    });
}

PromptNode.title = "Prompt";

PromptNode.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Prompt Node", PromptNode);




function NeuralPathwayNode() {
    this.addInput("Neural Pathways", "string");
    this.addOutput("Output", "string");
    this.properties = {
        "Neural Pathways": ""
    };

    this.combo = this.addWidget("combo", "Pathways", "", function(v) {
    }, {
        values: ["GPT 3.5", "GPT 4.0", "7B", "30B"]
    });
}

NeuralPathwayNode.title = "Neural Pathways";

NeuralPathwayNode.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Neural Pathways Node", NeuralPathwayNode);




function ToolsNodes() {
    this.addInput("Tools", "string");
    this.addOutput("Output", "string");
    this.properties = {
        "Tools": ""
    };

    this.combo = this.addWidget("combo", "Tools", "", function(v) {
    }, {
        values: ["Extractor", "Converters"]
    });
}

ToolsNodes.title = "Tools";

ToolsNodes.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Tools Node", ToolsNodes);




function MemoriesToolsNode() {
    this.addInput("Memories", "string");
    this.addOutput("Output", "string");
    this.properties = {
        "Memories": ""
    };

    this.combo = this.addWidget("combo", "Memories", "", function(v) {
    }, {
        values: ["Social", "Financial"]
    });
}

MemoriesToolsNode.title = "Memories";

MemoriesToolsNode.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Memories Node", MemoriesToolsNode);




function CircuitBreakerNode() {
    this.addInput("Circuit Breaker", "string");
    this.addOutput("Output", "string");
    this.properties = {
        "Choose Output Message": ""
    };

    this.combo = this.addWidget("combo", "Circuit Breaker", "", function(v) {
    }, {
        values: ["Priority 1", "Priority 2"]
    });
}

CircuitBreakerNode.title = "Circuit Breaker";

CircuitBreakerNode.prototype.onExecute = function() {
    this.setOutputData(0, "");
}

LiteGraph.registerNodeType("Main/Circuit Breaker Node", CircuitBreakerNode);