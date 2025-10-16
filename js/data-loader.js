// js/data-loader.js
window.channelData = {
    channels: [],
    
    addChannels: function(newChannels) {
        this.channels = this.channels.concat(newChannels);
    },
    
    getChannels: function() {
        return this.channels;
    },
    
    getTotalChannels: function() {
        return this.channels.length;
    },
    
    getCategories: function() {
        const categories = new Set(this.channels.map(channel => channel.category));
        return Array.from(categories);
    }
};