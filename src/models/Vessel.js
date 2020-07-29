const { Schema, model } = require("mongoose");

const timeSchema = new Schema(
  {
    hour: {
      type: Number
    },
    minutes: {
      type: Number
    },
  },
  {
    _id: false
  }
);

const shippingTimeSchema = new Schema(
  {
    days: {
      type: String
    },
    from: {
      type: timeSchema
    },
    to: {
      type: timeSchema
    },
  },
  {
    _id: false
  }
);

const shippingZoneSchema = new Schema(
  {
    locale: {
      type: String
    },
    zones: {
      type: [String]
    },
    shippingTime: {
      type: [shippingTimeSchema]
    }
  },
  {
    _id: false
  }
);

const capacitySchema = new Schema(
  {
    kg: {
      type: Number
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    depth: {
      type: Number
    },
  },
  {
    _id: false
  }
);

const vesselSchema = new Schema(
  {
    name: {
      type: String
    },
    model: {
      type: Number
    },
    type: {
      type: String
    },
    capacity: {
      type: capacitySchema
    },
    shippingZones: {
      type: [shippingZoneSchema]
    },    
    owner: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Vessel", vesselSchema);
